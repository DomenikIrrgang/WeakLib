<?php

require_once "./database/DatabaseEntry.php";

class MySQLDatabaseEntry implements DatabaseEntry
{
    private $values = [];

    public function __construct(array $values)
    {
        if ($values != null)
        {
            $this->values = $values;
        }
    }
    
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

    public function getKeys(): array
    {
        $tmp = [];
        foreach ($this->values as $key => $value) {
            array_push($tmp, $key);
        }
        return $tmp;
    }

    public function getValues(): array
    {
        $tmp = [];
        foreach ($this->values as $key => $value) {
            array_push($tmp, $value);
        }
        return $tmp;
    }
    public function setValue(string $key, $value)
    {
        $this->values[$key] = $value;
    }

    public function hasKey(string $key): bool 
    {
        return array_key_exists($key, $this->values);
    }

    public function removeKey(string $key)
    {
        unset($this->values[$key]);
    }
}
