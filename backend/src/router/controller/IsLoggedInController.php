<?php

require_once "./router/controller/Controller.php";
require_once "./database/tables/UserTable.php";

class IsLoggedInController implements Controller
{
    public function request(Request $request, array $params): string
    {
        global $session;
        if ($session->hasKey("authentication")) {
            if ($session->getValue("authentication")->isAuthenticated()) {
                return $session->getValue("authentication")->getUser()->toJSON();
            }
        }
        return "ERROR";
    }
}
