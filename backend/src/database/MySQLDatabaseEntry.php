<?php

abstract class MySQLDatabaseEntry implements DatabaseEntry {
    private $values=[];
    
    public function toJSON(): String{
        $JSONoutput=json_encode($this->values);   
        return $JSONoutput;
    }

   

    public function fromJSON(string $JSONEntry):DatabaseEntry{

        $entry=json_decode($JSONEntry);
         return $entry;

    }
}