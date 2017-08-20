<?php
require_once "./database/router/controller/Controller.php";
require_once "./database/tables/UserTable.php";

class GetAllUserController implements Controller
{
    public function request(array $params): string
    {
        global $database;
        $userTable = new UserTable;
        $allData = $userTable->getAllData($database);
        return json_encode($allData);
    }
}
