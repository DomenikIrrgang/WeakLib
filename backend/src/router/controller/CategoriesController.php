<?php
require_once "./router/controller/Controller.php";
require_once "./database/tables/WeakauraCategoriesTable.php";

class CategoriesController implements Controller
{
    public function request(Request $request, array $params): string
    {
        global $database;
        $categoriestable = new WeakauraCategoriesTable();
        return json_encode($categoriestable->getAllData($database));
    }
}
