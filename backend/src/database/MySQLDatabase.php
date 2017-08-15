<?php

require_once './database/Database.php';
require_once './database/DatabaseConnection.php';
require_once './database/MySQLDatabaseConnection.php';

class MySQLDatabase implements Database
{
    private $mysqlConnection;
    private $connected;

    public function connect(DatabaseConnection $connection): bool
    {
        if ($connection instanceof MySQLDatabaseConnection) {
            $this->mysqlConnection = new mysqli($connection->ip, $connection->username, $connection->password, $connection->database, $connection->port);
            $this->connected = true;
            return $this->isConnected();
        }
        return false;
    }
    
    public function disconnect(): bool
    {
        if ($this->isConnected()) {
            $this->mysqlConnection->close();
            $this->connected = false;
            return true;
        }
        return false;
    }

    public function isConnected(): bool
    {
        return $this->connected;
    }

    public function executeQuery(string $query): bool
    {
        if ($this->mysqlConnection->query($query) == true) {
            return true;
        }
        return false;
    }

    public function executePreparedStatement(string $query, array $values): bool {
        return false;
    }
}
