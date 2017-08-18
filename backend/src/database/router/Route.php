<?php

require_once "./controller/Controller.php";

class Route
{
    private $name;
    private $pattern;
    private $controller;
    private $params;

    public function __construct(string $name, string $pattern, Controller $controller)
    {
        $this->name = $name;
        $this->pattern = $pattern;
        $this->controller = $controller;
        $this->params = $params;
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
        return $this->class;
    }

    public function getParams()
    {
        return $this->params;
    }
    
    public function setParams(array $params)
    {
        $this->params = $params;
    }
}
