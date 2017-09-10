<?php

require_once 'database/MySQLTable.php';
require_once "./database/Field.php";
require_once "./util.php";

class WeakauraCommentsTable extends MySQLTable
{

    public function __construct()
    {
        $this->name = "weakauracomments";
        $this->addField((new Field("id", "int"))->primary()->autoIncrement());
        $this->addField((new Field("text", "TEXT")));
        $this->addForeignKey(new Field("userId", "int"), "id", "users");
        $this->addForeignKey(new Field("weakauraId", "int"), "id", "weakauras");
    }
}
