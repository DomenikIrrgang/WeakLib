<?php

class Router
{
    public $getRoutes = [];
    public $postRoutes = [];
    public $deleteRoutes = [];
    public $putRoutes = [];

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
    
    private function getRoute(array $routes, string $path)
    {
        foreach ($routes as $route) {
            if (strpos($path, $route->pattern) === 0) {
                break;
            }
        }

        $paramString = str_replace($route->pattern, '', $path);
        $params = explode('/', trim($paramString, '/'));
        $params = array_filter($params);
        $match = clone($route);
        $match->params = $params;
        return $match;
    }

    public function resolve($type, string $path)
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
}
