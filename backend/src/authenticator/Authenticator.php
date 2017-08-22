<?php

require_once "./database/tables/UserTable.php";

class Authenticator
{
    private $authenticated = false;
    private $user = null;
    
    public function __construct()
    {
    }

    public function login(string $name, string $password)
    {
        global $database;
        $userTable = new UserTable();
        $result = $userTable->getByField($database, "name", $name);
        if (count($result) > 0) {
            $user = $result[0];
            if (passwordMatch($password, $user->getValue("password"))) {
                global $session;
                $this->authenticated = true;
                $this->user = $user;
                $session->setValue("authentication", $this);
                return true;
            }
        }
        return false;
    }

    public function logout(): bool
    {
        if ($this->authenticated) {
            $this->authenticated = false;
            session_destroy();
            return true;
        }
        return false;
    }

    public function isAuthenticated(): bool
    {
        return $this->authenticated;
    }
}
