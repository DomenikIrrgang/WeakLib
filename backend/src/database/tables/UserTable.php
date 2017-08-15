<?php

require_once 'database/MySQLTable.php';

class UserTable extends MySQLTable
{
    public function __construct()
    {
        $this->addField("id", "int", true, false);
    }
}
