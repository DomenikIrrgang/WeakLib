<?php

require_once './database/Database.php';
require_once './database/DatabaseConnection.php';
require_once './database/MySQLDatabaseConnection.php';

class MySQLDatabase implements Database
{
    private $mysqlConnection;

    public function connect(DatabaseConnection $connection): bool
    {
        if ($connection instanceof MySQLDatabaseConnection) {
            $this->mysqlConnection = new msqli($connection->ip, $connection->username, $connection->password, $connection->database);
            return $this->isConnected();
        }
        return false;
    }
    
    public function disconnect(): bool
    {
        if ($this->isConnected()) {
            $this->mysqlConnection->close();
            return true;
        }
        return false;
    }

    public function isConnected(): bool
    {
        if ($this->mysqlConnection->connect_error) {
            return false;
        }
        return true;
    }
}
