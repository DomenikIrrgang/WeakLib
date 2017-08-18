<?php

class Router
{
    public $routes;
    
    public function __construct(array $routes)
    {
        $this->routes = $routes;
    }
    
    public function getRoute(string $path)
    {
        foreach($this->routes as $route) {
            if(strpos($path, $route->pattern) === 0) {
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
}
