<?php

require_once './database/MySQLDatabase.php';
require_once './database/MySQLDatabaseConnection.php';
require_once './config.php';
require_once './database/tables/UserTable.php';
require_once "./database/MySQLDatabaseEntry.php";
require_once "./database/tables/UserTable.php";

$database = new MySQLDatabase();
$databaseConnection = new MySQLDatabaseConnection(
    $config["database"]["ip"],
    $config["database"]["name"],
    $config["database"]["username"],
    $config["database"]["password"],
    $config["database"]["port"]
);

$database->connect($databaseConnection);
if ($database->isConnected()) {
    echo "database connection active\n";
} else {
    echo "database connection inactive\n";
}

$usertable = new UserTable();
$databaseEntry = $usertable->getById($database, 1);
$databaseEntry->setValue("id", 1);
$databaseEntry->setValue("username", "Suu");
$databaseEntry->setValue("password", "123");
echo $databaseEntry->toJSON() . "\n";
$usertable->putData($database, $databaseEntry);

$database->disconnect();
if ($database->isConnected()) {
    echo "database connection active\n";
} else {
    echo "database connection inactive\n";
}
