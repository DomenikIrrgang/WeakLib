<?php

class ForeignKey
{
    public $field;
    public $reference;
    public $table;

    function __construct(Field $field, string $reference, string $table)
    {
        $this->field = $field;
        $this->reference = $reference;
        $this->table = $table;
    }
}
