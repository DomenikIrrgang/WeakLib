<?php
require_once "./router/controller/Controller.php";
require_once "./database/tables/WeakauraTable.php";
require_once "./database/tables/WeakauraVersionTable.php";
require_once "./database/tables/WeakauraImageTable.php";

class AddWeakauraController implements Controller
{

    
    public function request(Request $request, array $params): string
    {
        global $database;
        $weakauraTable = new WeakauraTable();
        $weakauraVersionTable = new WeakauraVersionTable();
        $weakauraImageTable = new WeakauraImageTable();
        $input = json_decode($request->body, true);
        if (isset($input)) {
            $weakauraData = new MySQLDatabaseEntry($input);
            $weakauraData->setValue("userId", $weakauraData->getValue("user")["id"]);
            $weakauraData->setValue("hash", hash('sha256', rand()));
            $weakauraData->setValue("views", 0);
            $weakauraVersionData = new MySQLDatabaseEntry([
                "string" => $weakauraData->getValue("string"),
                "changes" => "Initial Version"
            ]);
            $weakauraData->removeKey("string");
            $weakauraData->removeKey("user");
            $weakauraData->removeKey("id");
            if ($weakauraTable->postData($database, $weakauraData) === true) {
                $weakauraData = $weakauraTable->getByField($database, "hash", $weakauraData->getValue("hash"))[0];
                $weakauraVersionData->setValue("weakauraId", $weakauraData->getValue("id"));
                $weakauraVersionTable->postData($database, $weakauraVersionData);
                return "SUCCESS";
            } else {
                return "ERROR missing fields";
            }
        }
        return "ERROR missing input";
    }
}
