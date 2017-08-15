<?php

class Field
{
    public $name;
    public $type;
    public $primary;
    public $nullable;

    function __construct(string $name, string $type, bool $primary, bool $nullable)
    {
        $this->name = $name;
        $this->type = $type;
        $this->primary = $primary;
        $this->nullable = $nullable;
    }

}
