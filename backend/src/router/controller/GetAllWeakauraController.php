<?php
require_once "./router/controller/Controller.php";
require_once "./database/tables/WeakauraTable.php";

class GetAllWeakauraController implements Controller
{
    public function request(Request $request, array $params): string
    {
        global $database;
        $weakauraTable = new WeakauraTable();

        if (isset($params["categories"])) {
            $categories = $params["categories"];
            unset($params["categories"]);
            if (strlen($categories) > 0) {
                $categories = explode(",", $categories);
            } else {
                unset($categories);
            }
        }

        if (isset($params["user"])) {
            $user = $params["user"];
            unset($params["user"]);
            if (strlen($user) == 0) {
                unset($user);
            }
        }

        if (isset($params["name"])) {
            $name = $params["name"];
            unset($params["name"]);
            if (strlen($name) == 0) {
                unset($name);
            }
        }
        if (count($params)==0) {
            $weakauras = $weakauraTable->getAllData($database);
        } else {
            $weakauras = $weakauraTable->searchByFields($database, $params);
        }

        if (isset($categories) || isset($user) || isset($name)) {
            foreach ($weakauras as $key => $value) {
                if (isset($categories)) {
                    foreach ($categories as $category) {
                        if (!in_array($category, $value->getValue("categories"))) {
                            unset($weakauras[$key]);
                            break;
                        }
                    }
                }
                if (isset($user) && strpos($value->getValue("user")->getValue("name"), $user) === false) {
                    unset($weakauras[$key]);
                }

                if (isset($name) && strpos($value->getValue("name"), $name) === false) {
                    $count = count($weakauras) - 1;
                    for ($i = $key; $i < $count; $i++) {
                        $weakauras[$i] = $weakauras[$i + 1];
                    }
                    unset($weakauras[$count]);
                }
            }
        }
          
        return json_encode($weakauras);
    }
}
