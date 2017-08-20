<?php

require_once 'database/MySQLTable.php';
require_once "./database/Field.php";

class UserTable extends MySQLTable
{
    public function __construct()
    {
        $this->name = "users";
        $this->addField((new Field("id", "int"))->primary()->autoIncrement());
        $this->addField(new Field("name", "varchar(255)"));
        $this->addField(new Field("password", "varchar(255)"));
        $this->addField(new Field("profilePicture", "varchar(255)"));
        $this->addField(new Field("description", "varchar(1024)"));
    }
}