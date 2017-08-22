<?php
require_once "./router/controller/Controller.php";
require_once "./database/tables/UserTable.php";

class GetAllUserController implements Controller
{
    public function request(array $params): string
    {
        global $database;
        $userTable = new UserTable;

        if (count($params)==0) {
            $allData = $userTable->getAllDataWithoutPassword($database);
            return json_encode($allData);
        } else {
            foreach ($params as $key => $param) {
                $user = $userTable->getByFieldWithoutPassword($database, $key, $param);
                if (array_key_exists(0, $user)) {
                    return $user[0]->toJSON();
                }
            }
            return "{}";
        }
    }
}
