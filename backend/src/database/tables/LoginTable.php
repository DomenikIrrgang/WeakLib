<?php

require_once 'database/MySQLTable.php';
require_once "./database/Field.php";
require_once "./util.php";

class LoginTable extends MySQLTable
{

    public function __construct()
    {

        $this->name = "logins";
        $this->addField((new Field("id", "int"))->primary()->autoIncrement());
        $this->addField((new Field("ip", "int")));
        $this->addForeignKey(new Field("userId", "int"), "id", "users");
    }
}
