<?php
require_once "./database/router/controller/Controller.php";
require_once "./database/tables/UserTable.php";

class GetAllUserController implements Controller {
    public function request(array $params): string{
        $userTable = new UserTable;
        $allData=$userTable.getAllData($database);
        var_dump($allData);
        return "";

    }


}