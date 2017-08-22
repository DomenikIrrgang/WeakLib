<?php

require_once "./router/controller/Controller.php";

class LogoutController implements Controller
{
    public function request(Request $request, array $params): string
    {
        global $session;
        if ($session->hasKey("authentication"))
        {
            if ($session->getValue("authentication")->logout())
            {
                return "SUCCESS";
            }
        }
        return "ERROR";
    }
}
