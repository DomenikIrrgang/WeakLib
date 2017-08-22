<?php

require_once 'database/MySQLTable.php';
require_once "./database/Field.php";

class UserTable extends MySQLTable
{
    public function __construct()
    {
        $this->name = "users";
        $this->addField((new Field("id", "int"))->primary()->autoIncrement());
        $this->addField((new Field("name", "varchar(255)"))->unique());
        $this->addField(new Field("password", "varchar(255)"));
        $this->addField((new Field("email", "varchar(255)"))->unique());
        $this->addField((new Field("profilePicture", "varchar(255)"))->nullable());
        $this->addField((new Field("description", "varchar(1024)"))->nullable());
    }

    public function getByFieldWithoutPassword(Database $database, string $fieldname, $value): array
    {
        $result = parent::getByField($database, $fieldname, $value);
        foreach ($result as $value) {
            $value->removeKey("password");
        }
        return $result;
    }

    public function getAllDataWithoutPassword(Database $database): array
    {
        $result = parent::getAllData($database);
        foreach ($result as $value) {
            $value->removeKey("password");
        }
        return $result;
    }

    public function putData(Database $database, DatabaseEntry $databaseEntry)
    {
        $options = [
            'cost' => 10,
        ];
        $passwordHash = password_hash($databaseEntry->getValue("password"), PASSWORD_BCRYPT, $options);
        $databaseEntry->setValue("password", $passwordHash);
        return parent::putData($database, $databaseEntry);
    }

    public function postData(Database $database, DatabaseEntry $databaseEntry)
    {
        $options = [
            'cost' => 10,
        ];
        $passwordHash = password_hash($databaseEntry->getValue("password"), PASSWORD_BCRYPT, $options);
        $databaseEntry->setValue("password", $passwordHash);
        return parent::postData($database, $databaseEntry);
    }
}
