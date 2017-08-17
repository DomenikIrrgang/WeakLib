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
        array_push($this->fields, new Field($name, $type, $primary, $nullable));
    }

    public function addForeignKey(string $name, string $type, string $reference, string $table)
    {
        array_push($this->foreignKeys, new ForeignKey(new Field($name, $type), $reference, $table));
    }

    public function getInsertQuery(): string
    {
        $query = "CREATE TABLE " . $this->name . " (";
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
        $query = substr($query, 0, -1);
        $query = $query . ");";
        return $query;
    }

    public function getRemoveQuery(): string
    {
        return "DROP TABLE IF EXISTS " . $this->name;
    }

    public function add(Database $database): bool
    {
        return $database->executeQuery($this->getInsertQuery());
    }

    public function remove(Database $database): bool
    {
        return $database->executeQuery($this->getRemoveQuery());
    }

    public function getById(Database $database, int $id): DatabaseEntry
    {
        $data = $database->getExecutePreparedStatement("SELECT * FROM " . $this->name . " WHERE id=?", [$id]);
        return new MySQLDatabaseEntry($data[0]);
    }

    public function postData(Database $database, DatabaseEntry $data): bool
    {
        $query = "INSERT INTO " . $this->name . " (";
        $values = "(";
        foreach ($data->getKeys() as $key) {
            $query .= $key . ", ";
            $values .= "?, ";
        }
        $query = substr($query, 0, -2);
        $values = substr($values, 0, -2);
        $values .= ")";
        $query .= ") VALUES ";
        $query .= $values;
        return $database->executePreparedStatement($query, $data->getValues());
    }
    
    public function getByField(Database $database, string $fieldname, $value): DatabaseEntry
    {
        $data=$database->getPreparedStatement("SELECT * FROM " . $this->name ." WHERE " .  $fieldname . "=?", [$value] ) ;
        return new MySQLDatabaseEntry($data);
    }
}
