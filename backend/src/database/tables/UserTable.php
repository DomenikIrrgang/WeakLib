<?php

require_once 'database/MySQLTable.php';

class UserTable extends MySQLTable
{
    public function __construct()
    {
        $this->name = "users";
        $this->addField("id", "int", true, false);
        $this->addField("username", "varchar(255)", false, false);
        $this->addField("password", "varchar(255)", false, false);
    }
}
