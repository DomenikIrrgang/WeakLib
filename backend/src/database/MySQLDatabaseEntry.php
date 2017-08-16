<?php

require_once "./database/DatabaseEntry.php";

class MySQLDatabaseEntry implements DatabaseEntry
{
    private $values = [];
    
    public function toJSON(): String
    {
        $JSONoutput=json_encode($this->values);
        return $JSONoutput;
    }

    public function fromJSON(string $JSONEntry): void
    {
        $this->values = json_decode($JSONEntry, true);
    }

    public function getValue(string $key)
    {
        return $this->values[$key];
    }
}
