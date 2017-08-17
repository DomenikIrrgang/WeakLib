<?php

require_once './database/Database.php';
require_once './database/DatabaseEntry.php';

interface DatabaseModel
{
    public function add(Database $database): bool;
    public function remove(Database $database): bool;
    public function getById(Database $database, int $id): DatabaseEntry;
    public function postData(Database $database, DatabaseEntry $data): bool;
}
