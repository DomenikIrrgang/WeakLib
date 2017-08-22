<?php

require_once './database/Database.php';
require_once './database/DatabaseConnection.php';
require_once './database/MySQLDatabaseConnection.php';
require_once "./database/MySQLDatabaseError.php";

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
    
    public function executePreparedStatement(string $query, array $values)
    {
        $statement = $this->mysqlConnection->prepare($query);
        if ($statement != false) {
            $typeString="";
            foreach ($values as $value) {
                if (gettype($value) =="integer") {
                    $typeString = $typeString . "i";
                }
                if (gettype($value)=="string") {
                    $typeString = $typeString . "s";
                }
                if (gettype($value)=="double") {
                    $typeString = $typeString . "d";
                }
            }
            $bindArray = [];
            $bindArray[0] = & $typeString;
            for ($i = 0; $i < count($values); $i++) {
                $bindArray[$i+1] = & $values[$i];
            }
            call_user_func_array(array($statement, 'bind_param'), $bindArray);
            $statement->execute();
            if ($this->mysqlConnection->error) {
                return new MySQLDatabaseError($this->mysqlConnection->error);
            } 
            $statement->close();
            return true;
        }
        return new MySQLDatabaseError($this->mysqlConnection->error);
    }

    public function getExecutePreparedStatement(string $query, array $values): array
    {
        $statement = $this->mysqlConnection->prepare($query);
        if ($statement != false) {
            $typeString="";
            foreach ($values as $value) {
                if (gettype($value) =="integer") {
                    $typeString = $typeString . "i";
                }
                if (gettype($value)=="string") {
                    $typeString = $typeString . "s";
                }
                if (gettype($value)=="double") {
                    $typeString = $typeString . "d";
                }
            }
            $bindArray = [];
            $bindArray[0] = & $typeString;
            for ($i = 0; $i < count($values); $i++) {
                $bindArray[$i+1] = & $values[$i];
            }
            call_user_func_array(array($statement, 'bind_param'), $bindArray);
            $statement->execute();
            $queryResult = $statement->get_result();
            $result = [];
            while ($row = $queryResult->fetch_assoc()) {
                array_push($result, $row);
            }
            $statement->close();
            return $result;
        }
        return [];
    }

    public function getExecuteQuery(string $query): array
    {
        $result = $this->mysqlConnection->query($query);
        if ($result != false) {
            $tmp = [];
            while ($row = $result->fetch_assoc()) {
                array_push($tmp, $row);
            }
            return $tmp;
        }
        return [];
    }
}
