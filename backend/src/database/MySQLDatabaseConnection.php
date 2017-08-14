<?php

class MySQLDatabaseConnection implements DatabaseConnection
{
    public $ip;
    public $database;
    public $username;
    public $password;

    public function __construct($ip, $database, $username, $password)
    {
        $this->ip = $ip;
        $this->database = $database;
        $this->username = $username;
        $this->password = $password;
    }
}
