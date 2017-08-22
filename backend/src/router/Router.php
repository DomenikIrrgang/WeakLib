<?php

require_once "./router/Route.php";
require_once "./router/Request.php";

class Router
{
    public $getRoutes = [];
    public $postRoutes = [];
    public $deleteRoutes = [];
    public $putRoutes = [];
    public $error404;
    public $error401;

    public function get(Route $route)
    {
        array_push($this->getRoutes, $route);
    }

    public function post(Route $route)
    {
        array_push($this->postRoutes, $route);
    }

    public function delete(Route $route)
    {
        array_push($this->deleteRoutes, $route);
    }

    public function put(Route $route)
    {
        array_push($this->putRoutes, $route);
    }
    
    private function getRoute(array $routes, string $path): Route
    {
        $found = false;
        foreach ($routes as $route) {
            if (strpos($path, $route->getPattern()) === 0) {
                $found = true;
                break;
            }
        }
        if (!$found) {
            return $this->error404;
        }

        $match = clone($route);
        $paramString = str_replace($route->getPattern(), '', $path);
        $params = explode('/', trim($paramString, '/'));
        
        if (count($params) > 0) {
            $params = substr($params[0], 1);
            parse_str($params, $result);
            $match->setParams($result);
        }
        
        return $match;
    }

    public function resolve(Request $request): Route
    {
        switch ($request->type) {
            case "GET":
                return $this->getRoute($this->getRoutes, $request->getBaseURI());
            case "POST":
                return $this->getRoute($this->postRoutes, $request->getBaseURI());
            case "DELETE":
                return $this->getRoute($this->deleteRoutes, $request->getBaseURI());
            case "PUT":
                return $this->getRoute($this->putRoutes, $request->getBaseURI());
        }
    }

    public function dispatch(Request $request): string
    {
        $route = $this->resolve($request);
        return $this->executeRequest($request, $route);
    }

    public function executeRequest(Request $request, Route $route): string
    {
        $redirected = false;
        foreach ($route->getMiddlewares() as $middleware) {
            $newRoute = $middleware->onRequest($request, $route);
            if ($newRoute != $route) {
                $redirected = true;
                $request->redirect($newRoute);
                $route = $newRoute;
                break;
            }
        }
        if (!$redirected) {
            return $route->getController()->request($request, $route->getParams());
        }
        return $this->executeRequest($request, $route);
    }
}
