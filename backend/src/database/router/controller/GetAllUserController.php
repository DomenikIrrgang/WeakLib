<?php
require_once "./database/router/controller/Controller.php";
require_once "./database/tables/UserTable.php";

class GetAllUserController implements Controller
{
    public function request(array $params): string
    {
        global $database;
        $userTable = new UserTable;

        if (count($params)==0) {
            $allData = $userTable->getAllData($database);
            echo "all data";
            return json_encode($allData);
        } else {
            $user = $userTable->getByField($database, "name", $params["name"]);
            if ($user->hasKey("0")) {
                $data = new MySQLDatabaseEntry($user->getValue("0"));
                return $data->toJSON();
            }
            return "{}";
        }
    }
}
