<?php

class MySQLDatabaseConnection implements DatabaseConnection
{
    public $ip;
    public $database;
    public $username;
    public $password;
    public $port;

    public function __construct(string $ip, string $database, string $username, string $password, int $port)
    {
        $this->ip = $ip;
        $this->database = $database;
        $this->username = $username;
        $this->password = $password;
        $this->port = $port;
    }
}