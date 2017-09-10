<?php

require_once 'database/MySQLTable.php';
require_once "./database/Field.php";
require_once "./util.php";
require_once "./database/tables/WeakauraVersionTable.php";
require_once "./database/tables/WeakauraImageTable.php";
require_once "./database/tables/WeakauraToCategoriesTable.php";
require_once "./database/tables/WeakauraCategoriesTable.php";

class WeakauraTable extends MySQLTable
{

    public function __construct()
    {
        $this->name = "weakauras";
        $this->addField((new Field("id", "int"))->primary()->autoIncrement());
        $this->addField((new Field("name", "varchar(255)")));
        $this->addField((new Field("hash", "varchar(255)"))->unique());
        $this->addField((new Field("profilePicture", "varchar(255)")));
        $this->addField((new Field("description", "TEXT")));
        $this->addField((new Field("views", "int")));
        $this->addForeignKey(new Field("userId", "int"), "id", "users");
    }

    public function getAllData(Database $database): array
    {
        global $database;
        $weakauras = parent::getAllData($database);
        foreach ($weakauras as $weakaura) {
            $this->formatWeakaura($weakaura);
        }
        return $weakauras;
    }
    
    private function formatWeakaura($weakaura)
    {
        global $database;
        $weakauraVersionTable = new WeakauraVersionTable();
        $weakauraImageTable = new WeakauraImageTable();
        $weakauraToCategoriesTable = new WeakauraToCategoriesTable();
        $weakauraCategoriesTable = new WeakauraCategoriesTable();
        $userTable = new UserTable();
        $weakauraImages = $weakauraImageTable->getByField($database, "weakauraId", $weakaura->getValue("id"));
        $weakauraVersions = $weakauraVersionTable->getByField($database, "weakauraId", $weakaura->getValue("id"));
        $user = $userTable->getByFieldWithoutPassword($database, "id", $weakaura->getValue("userId"));
        $categories = $weakauraToCategoriesTable->getByField($database, "weakauraId", $weakaura->getValue("id"));
        $weakaura->removeKey("userId");
        $weakaura->removeKey("id");
        $weakaura->setValue("user", $user[0]);
        $tmp = [];
        foreach ($weakauraVersions as $version) {
            $version->removeKey("weakauraId");
            $version->removeKey("id");
            array_push($tmp, $version);
        }
        $weakaura->setValue("versions", $tmp);
        $tmp = [];
        foreach ($weakauraImages as $image) {
            $image->removeKey("weakauraId");
            $image->removeKey("id");
            array_push($tmp, $image);
        }
        $weakaura->setValue("images", $tmp);
        $tmp = [];
        foreach ($categories as $category) {
            $categoryName = $weakauraCategoriesTable->getByField($database, "id", $category->getValue("categoryId"));
            array_push($tmp, $categoryName[0]->getValue("name"));
        }
        $weakaura->setValue("categories", $tmp);
    }

    public function getByField(Database $database, string $fieldname, $value): array
    {
        global $database;
        $weakauras = parent::getByField($database, $fieldname, $value);
        foreach ($weakauras as $weakaura) {
            $this->formatWeakaura($weakaura);
        }
        return $weakauras;
    }

    public function searchByFields(Database $database, array $fields): array
    {
        global $database;
        $weakauras = parent::searchByFields($database, $fields);
        foreach ($weakauras as $weakaura) {
            $this->formatWeakaura($weakaura);
        }
        return $weakauras;
    }
}
