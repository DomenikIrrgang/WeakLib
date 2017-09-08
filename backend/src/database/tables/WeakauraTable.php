<?php

require_once 'database/MySQLTable.php';
require_once "./database/Field.php";
require_once "./util.php";
require_once "./database/tables/WeakauraVersionTable.php";

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
        $userTable = new UserTable();
        $weakauraVersions = $weakauraVersionTable->getByField($database, "weakauraId", $weakaura->getValue("id"));
        $user = $userTable->getByFieldWithoutPassword($database, "id", $weakaura->getValue("userId"));
        $weakaura->removeKey("userId");
        $weakaura->setValue("user", $user[0]);
        $tmp = [];
        foreach ($weakauraVersions as $version) {
            $version->removeKey("weakauraId");
            array_push($tmp, $version);
        }
        $weakaura->setValue("versions", $tmp);
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
