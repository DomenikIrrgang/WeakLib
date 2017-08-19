<?php

require_once './database/MySQLDatabase.php';
require_once './database/MySQLDatabaseConnection.php';
require_once './config.php';
require_once "./database/router/Routes.php";

$database = new MySQLDatabase();
$databaseConnection = new MySQLDatabaseConnection(
    $config["database"]["ip"],
    $config["database"]["name"],
    $config["database"]["username"],
    $config["database"]["password"],
    $config["database"]["port"]
);

$requestURI = $router->getBaseURI($_SERVER['REQUEST_URI']) ?: "/test?username=Suu&password=13";
$requestType = $_SERVER['REQUEST_METHOD'] ?: "GET";

$database->connect($databaseConnection);
echo $router->dispatch($requestType, $requestURI);
$database->disconnect();