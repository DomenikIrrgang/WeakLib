<?php

require_once "./database/MySQLDatabase.php";
require_once "./database/MySQLDatabaseConnection.php";
require_once "./database/tables/UserTable.php";
require_once "./config.php";

$tables = [
    "user" => new UserTable(),
];

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
    foreach ($tables as $name => $table) {
        if (!$table->add($database)) {
            echo "ERROR: COULD NOT ADD DATABASEMODEL: " . $name . "\n";
            break;
        }
    }
    $database->disconnect();
} else {
    echo "ERROR: COULD NOT CONNECT TO DATABASE!\n";
}