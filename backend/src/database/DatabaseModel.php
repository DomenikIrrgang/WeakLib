<?php

require_once './database/Database.php';

interface DatabaseModel
{
    public function add(Database $database): bool;
    public function remove(Database $database): bool;
}
