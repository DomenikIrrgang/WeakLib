<?php 
class MySQLDatabaseConnection implements DatabaseConnection
{

    public function _construct($ip,§databse,$username,$password)
        {
   
        $this->ip = $ip;
        $this->database = $database;
        $this->username = $username;
        $this->password = $password;
        }
}
?>