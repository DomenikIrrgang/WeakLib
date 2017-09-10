<?php

require_once 'database/MySQLTable.php';
require_once "./database/Field.php";
require_once "./util.php";

class WeakauraToCategoriesTable extends MySQLTable
{

    public function __construct()
    {
        $this->name = "weakauratocategories";
        $this->addField((new Field("id", "int"))->primary()->autoIncrement());
        $this->addForeignKey((new Field("weakauraId", "int")), "id", "weakauras");
        $this->addForeignKey((new Field("categoryId", "int")), "id", "weakauracategories");
    }
}
