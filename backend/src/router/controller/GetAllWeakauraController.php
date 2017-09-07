<?php
require_once "./router/controller/Controller.php";
require_once "./database/tables/WeakauraTable.php";

class GetAllWeakauraController implements Controller
{
    public function request(Request $request, array $params): string
    {
        global $database;
        $weakauraTable = new WeakauraTable();

        if (count($params)==0) {
            $allData = $weakauraTable->getAllData($database);
            return json_encode($allData);
        } else {
            $weakauras = $weakauraTable->searchByFields($database, $params);
            return json_encode($weakauras);
        }
    }
}
