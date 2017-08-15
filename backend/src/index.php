<?php

require_once './database/MySQLDatabase.php';
require_once './database/MySQLDatabaseConnection.php';
require_once './config.php';
require_once './database/tables/UserTable.php';

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

$database->disconnect();
if ($database->isConnected()) {
    echo "database connection active\n";
} else {
    echo "database connection inactive\n";
}