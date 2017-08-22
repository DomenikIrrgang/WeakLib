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

if (array_key_exists('REQUEST_URI', $_SERVER)) {
    $requestURI = $router->getBaseURI($_SERVER['REQUEST_URI']);
    $requestType = $_SERVER['REQUEST_METHOD'];
} else {
    $requestURI =  "/api/user?name=Suu";
    $requestType = "POST";
}

$database->connect($databaseConnection);
echo $router->dispatch($requestType, $requestURI);
$database->disconnect();
