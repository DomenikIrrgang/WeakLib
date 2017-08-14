<?php

class Field
{
    public $name;
    public $type;
    public $primary;

    function __construct(string $name, string $type, bool $primary)
    {
        $this->name = $name;
        $this->type = $type;
        $this->primary = $primary;
    }
}
