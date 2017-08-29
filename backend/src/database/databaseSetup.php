<?php

require_once "./database/MySQLDatabase.php";
require_once "./database/MySQLDatabaseConnection.php";
require_once "./database/tables/UserTable.php";
require_once "./config.php";
require_once "./database/tables/LoginTable.php";

$tables = [
    "user" => new UserTable(),
    "logins" => new LoginTable(),
];

$defaultEntries = [
    "user" => [
        new MySQLDatabaseEntry([
            "name" => "Suu",
            "password" => "123",
            "profilePicture" => "http://wow.zamimg.com/images/logos/construction.png",
            "description" => "Hello World",
            "email" => "test@test.com"
        ])
    ]
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
    foreach ($defaultEntries as $table => $entries) {
        foreach ($entries as $entry) {
            $tables[$table]->postData($database, $entry);
        }
    }
    $database->disconnect();
} else {
    echo "ERROR: COULD NOT CONNECT TO DATABASE!\n";
}