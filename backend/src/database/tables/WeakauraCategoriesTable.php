<?php

require_once 'database/MySQLTable.php';
require_once "./database/Field.php";
require_once "./util.php";

class WeakauraCategoriesTable extends MySQLTable
{

    public function __construct()
    {
        $this->name = "weakauracategories";
        $this->addField((new Field("id", "int"))->primary()->autoIncrement());
        $this->addField((new Field("name", "varchar(255)")));
    }
}
