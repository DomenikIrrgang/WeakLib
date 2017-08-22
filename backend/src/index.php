<?php

require_once "./util.php";
require_once './database/MySQLDatabase.php';
require_once './database/MySQLDatabaseConnection.php';
require_once './config.php';
require_once "./router/Routes.php";
require_once "./router/Request.php";
require_once "./authenticator/Authenticator.php";
require_once "./authenticator/Session.php";

$database = new MySQLDatabase();
$databaseConnection = new MySQLDatabaseConnection(
    $config["database"]["ip"],
    $config["database"]["name"],
    $config["database"]["username"],
    $config["database"]["password"],
    $config["database"]["port"]
);

if (!isCommandLineInterface()) {
    $request = Request::fromRequest();
} else {
    $request = new Request(
        "127.0.0.1",
        "localhost",
        "/backend/login?name=Suu&password=123",
        "POST",
        '{
           "name": "Suu",
           "email": "test@test121233123.com",
           "password": "123"  
        }'
    );
}

$session = new Session();
$database->connect($databaseConnection);
echo $router->dispatch($request);
$database->disconnect();
