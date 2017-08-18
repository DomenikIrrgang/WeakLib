<?php

class Route {
    private $name;
    private $pattern;
    private $class;
    private $method;
    private $params;

    public function __construct($name,$pattern,$class,$method,$params){
        $this->name=$name;
        $this->pattern=$pattern;
        $this->class=$class;
        $this->method=$method;
        $this->params=$params;
    }


    public function getName(){
    return $this->name;
    }

    public function getPattern(){
        return $this->pattern;
    }

    public function getClass(){
        return $this->class;
    }

    public function getMethod(){
        return $this->method;
    }

    public function getParams(){
        return $this->params;
    }


}

