<?php

require_once "./database/router/controller/Controller.php";
require_once "./database/MySQLDatabaseEntry.php";

class RegisterController implements Controller
{
    public function request(array $params): string
    {
        global $database;
        $userTable = new UserTable();
        $userData = new MySQLDatabaseEntry(json_decode(file_get_contents('php://input'), true));
        
        if (strlen($userData->getValue("name")) >= 3) {
            if (filter_var($userData->getValue("email"), FILTER_VALIDATE_EMAIL)) {
                $databaseError = $userTable->postData($database, $userData);
                if ($databaseError !== true) {
                    return "ERROR " . $databaseError->fieldName . " taken";
                }
                return "SUCCESS";
            } else {
                return "ERROR email invalid";
            }
        } else {
            return "ERROR name length";
        }
    }
}
