<?php

require_once './database/Database.php';
require_once './database/DatabaseEntry.php';

interface DatabaseModel
{
    public function add(Database $database): bool;
    public function remove(Database $database): bool;
    public function getById(Database $database, int $id): DatabaseEntry;
    public function postData(Database $database, DatabaseEntry $data): bool;
    public function getByField(Database $database, string $fieldname, $value): DatabaseEntry;
    public function deleteData(Database $database, DatabaseEntry $data):bool;
}
