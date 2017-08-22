<?php

require_once "./router/controller/Controller.php";
require_once "./router/middleware/Middleware.php";

class Route
{
    private $name;
    private $pattern;
    private $controller;
    private $params = [];
    private $middlewares = [];

    public function __construct(string $name, string $pattern, Controller $controller)
    {
        $this->name = $name;
        $this->pattern = $pattern;
        $this->controller = $controller;
    }

    public function getName()
    {
        return $this->name;
    }

    public function getPattern()
    {
        return $this->pattern;
    }

    public function getController()
    {
        return $this->controller;
    }

    public function getParams()
    {
        return $this->params;
    }
    
    public function setParams(array $params)
    {
        $this->params = $params;
    }

    public function middleware(Middleware $middleware): Route
    {
        array_push($this->middlewares, $middleware);
        return $this;
    }

    public function getMiddlewares(): array
    {
        return $this->middlewares;
    }
}
