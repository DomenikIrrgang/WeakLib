<?php

require_once "./database/tables/UserTable.php";
require_once "./database/tables/LoginTable.php";
require_once "./router/Request.php";

class Authenticator
{
    private $authenticated = false;
    private $user = null;
    
    public function __construct()
    {
    }

    public function login(Request $request, string $name, string $password)
    {
        global $database;
        $userTable = new UserTable();
        $result = $userTable->getByField($database, "name", $name);
        if (count($result) > 0) {
            $user = $result[0];
            if (passwordMatch($password, $user->getValue("password"))) {
                global $session;
                $this->authenticated = true;
                $user->removeKey("password");
                $this->user = $user;
                $session->setValue("authentication", $this);
                $loginTable = new LoginTable();
                $loginTable->postData($database, new MySQLDatabaseEntry([
                    "ip" => $request->ip,
                    "userId" => $user->getValue("id")
                ]));
                return true;
            }
        }
        return false;
    }

    public function logout(): bool
    {
        if ($this->authenticated) {
            $this->authenticated = false;
            $this->user = null;
            session_destroy();
            return true;
        }
        return false;
    }

    public function isAuthenticated(): bool
    {
        return $this->authenticated;
    }

    public function getUser()
    {
        return $this->user;
    }
}
