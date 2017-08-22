<?php

require_once './database/DatabaseModel.php';
require_once './database/Field.php';
require_once './database/ForeignKey.php';
require_once "./database/MySQLDatabaseEntry.php";

abstract class MySQLTable implements DatabaseModel
{
    protected $name = "";
    protected $fields = array();
    protected $foreignKeys = array();

    public function setName(string $name)
    {
        $this->name = $name;
    }

    public function addField(Field $field)
    {
        array_push($this->fields, $field);
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
            if ($field->autoIncrement == true) {
                $query .= ' AUTO_INCREMENT';
            }
            if ($field->unique == true) {
                $query .= ' UNIQUE';
            }
            $query = $query . ',';
        }
        $query .= "created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,";
        $query .= "updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,";
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
        if ($data != false) {
            return new MySQLDatabaseEntry($data[0]);
        }
        return new MySQLDatabaseEntry($data);
    }

    public function postData(Database $database, DatabaseEntry $data)
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
    
    public function getByField(Database $database, string $fieldname, $value): array
    {
        $data=$database->getExecutePreparedStatement("SELECT * FROM " . $this->name ." WHERE " .  $fieldname . "=?", [$value] ) ;
        $tmp = [];
        foreach ($data as $dataEntry) {
            array_push($tmp, new MySQLDatabaseEntry($dataEntry));
        }
        return $tmp;
    }

    public function putData(Database $database, DatabaseEntry $databaseEntry)
    {
        if (count($this->getById($database, $databaseEntry->getValue("id"))->getValues()) > 0) {
            $query = "UPDATE " . $this->name. " SET ";
            $values = [];
            foreach ($databaseEntry->getKeys() as $key) {
                $query .= $key . "=?, ";
                array_push($values, $databaseEntry->getValue($key));
            }
            $query = substr($query, 0, -2);
            $query .= " WHERE id=?";
            array_push($values, $databaseEntry->getValue("id"));
            return $database->executePreparedStatement($query, $values);
        } else {
            return $this->postData($database, $databaseEntry);
        }
    }
    public function deleteData(Database $database, DatabaseEntry $data)
    {
        $query ="DELETE FROM " . $this->name . " WHERE id=?";
        return $database->executePreparedStatement($query, [$data->getValue("id")]);
    }

    public function getAllData(Database $database): array
    {
        $tmp = [];
        $query = "SELECT * FROM " . $this->name;
        $data = $database->getExecuteQuery($query);
        foreach ($data as $dataEntry) {
            array_push($tmp, new MySQLDatabaseEntry($dataEntry));
        }
        return $tmp;
    }
}
