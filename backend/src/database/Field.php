<?php

class Field
{
    public $name;
    public $type;
    public $primary = false;
    public $nullable = false;
    public $autoIncrement = false;

    function __construct(string $name, string $type)
    {
        $this->name = $name;
        $this->type = $type;
    }

    public function nullable(): Field
    {
        $this->nullable = true;
        return $this;
    }

    public function primary(): Field
    {
        $this->primary = true;
        return $this;
    }

    public function autoIncrement(): Field
    {
        $this->autoIncrement = true;
        return $this;
    }

}
