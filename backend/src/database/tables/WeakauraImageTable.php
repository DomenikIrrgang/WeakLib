<?php

require_once 'database/MySQLTable.php';
require_once "./database/Field.php";
require_once "./util.php";

class WeakauraImageTable extends MySQLTable
{

    public function __construct()
    {
        $this->name = "weakauraimages";
        $this->addField((new Field("id", "int"))->primary()->autoIncrement());
        $this->addField((new Field("url", "varchar(255)")));
        $this->addField((new Field("description", "TEXT")));
        $this->addForeignKey(new Field("weakauraId", "int"), "id", "weakauras");
    }
}
