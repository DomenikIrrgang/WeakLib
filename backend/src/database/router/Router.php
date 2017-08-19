<?php

require_once "./database/router/Route.php";

class Router
{
    public $getRoutes = [];
    public $postRoutes = [];
    public $deleteRoutes = [];
    public $putRoutes = [];
    public $error404;

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

    public function resolve($type, string $path): Route
    {
        switch ($type) {
            case "GET":
                return $this->getRoute($this->getRoutes, $path);
            case "POST":
                return $this->getRoute($this->postRoutes, $path);
            case "DELETE":
                return $this->getRoute($this->deleteRoutes, $path);
            case "PUT":
                return $this->getRoute($this->putRoutes, $path);
        }
    }

    public function dispatch($type, string $path): string
    {
        $route = $this->resolve($type, $path);
        return $route->getController()->request($route->getParams());
    }
}
