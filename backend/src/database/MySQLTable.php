<?php

abstract class MySQLTable
{
    protected $name = "";
    protected $fields = array();
    protected $foreignKeys = array();

    public function setName($name) {
        $this->name = $name;
    }

    public function addField($name, $type) {
        array_push($fields, new Field($name, $type));
    }

    public function addForeignKey($name, $type, $reference, $table) {
        array_push($foreignKeys, new ForeignKey(new Field($name, $type), $reference, $table));
    }
}
