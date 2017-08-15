<?php

abstract class MySQLTable
{
    protected $name = "";
    protected $fields = array();
    protected $foreignKeys = array();

    public function setName(string $name) {
        $this->name = $name;
    }

    public function addField(string $name, string $type) {
        array_push($fields, new Field($name, $type));
    }

    public function addForeignKey(string $name, string $type, string $reference, string $table) {
        array_push($foreignKeys, new ForeignKey(new Field($name, $type), $reference, $table));
    }
}