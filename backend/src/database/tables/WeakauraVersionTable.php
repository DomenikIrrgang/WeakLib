<?php

require_once 'database/MySQLTable.php';
require_once "./database/Field.php";
require_once "./util.php";

class WeakauraVersionTable extends MySQLTable
{

    public function __construct()
    {
        $this->name = "weakauraversions";
        $this->addField((new Field("id", "int"))->primary()->autoIncrement());
        $this->addField((new Field("changes", "TEXT")));
        $this->addField((new Field("string", "TEXT")));
        $this->addForeignKey(new Field("weakauraId", "int"), "id", "weakauras");
    }
}
