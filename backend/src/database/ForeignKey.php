<?php

class ForeignKey
{
    public $field;
    public $reference;
    public $tableName;

    function __construct(string $field, string $reference, string $tableName)
    {
        $this->field = $field;
        $this->reference = $reference;
        $this->tableName = $tableName;
    }
}
