<?php

require_once './database/MySQLDatabase.php';
require_once './database/MySQLDatabaseConnection.php';
require_once './config.php';
require_once './database/tables/UserTable.php';
require_once './database/MySQLDatabaseEntry.php';
require_once './database/DatabaseEntry.php';

$json = '{"a":1,"b":2,"c":3,"d":4,"e":5}';
$database = new MySQLDatabase();
$databaseConnection = new MySQLDatabaseConnection(
    $config["database"]["ip"],
    $config["database"]["name"],
    $config["database"]["username"],
    $config["database"]["password"],
    $config["database"]["port"]
);

$database->fromJSON($json);

$database->connect($databaseConnection);
if ($database->isConnected()) {
    echo "database connection active\n";
} else {
    echo "database connection inactive\n";
}
var_dump($database->getExecutePreparedStatement(
    'SELECT * FROM users WHERE username=?', ["Suu"]
));
$database->disconnect();
if ($database->isConnected()) {
    echo "database connection active\n";
} else {
    echo "database connection inactive\n";
}
