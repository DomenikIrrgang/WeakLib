<?php

require_once './database/DatabaseModel.php';
require_once './database/Field.php';
require_once './database/ForeignKey.php';

abstract class MySQLTable implements DatabaseModel
{
    protected $name = "";
    protected $fields = array();
    protected $foreignKeys = array();

    public function setName(string $name)
    {
        $this->name = $name;
    }

    public function addField(string $name, string $type, bool $primary, bool $nullable)
    {
        array_push($this->$fields, new Field($name, $type, $primary, $nullable));
    }

    public function addForeignKey(string $name, string $type, string $reference, string $table)
    {
        array_push($this->$foreignKeys, new ForeignKey(new Field($name, $type), $reference, $table));
    }

    public function getInsertQuery(): string
    {
        $query = "CREATE TABLE " . $this->name . " {";
        foreach ($this->fields as $field) {
            $query = $query . $field->name . " " . $field->type;
            if ($field->primary) {
                $query = $query . ' PRIMARY KEY';
            }
            if ($field->nullable == false) {
                $query = $query . ' NOT NULL';
            }
            $query = $query . ',';
        }
        foreach ($this->foreignKeys as $foreignKey) {
            $query = $query . 'FOREIGN KEY (' . $foreignKey->field . ') REFERENCES ' . $foreignKey->table . '(' . $foreignKey->reference . '),';
        }
            echo $query;
            return $query;
    }

    public function add(Database $database): bool
    {
        return true;
        //return $database->executeQuery($this->getInsertQuery());
    }
}
