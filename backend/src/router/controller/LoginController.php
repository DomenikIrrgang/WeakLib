<?php

require_once "./router/controller/Controller.php";

class LoginController implements Controller
{
    public function request(Request $request, array $params): string
    {
        if (array_key_exists("name", $params) && array_key_exists("password", $params))
        {
            $authenticator = new Authenticator();
            if ($authenticator->login($request, $params["name"], $params["password"]))
            {
                return "SUCCESS";
            }
        }
        return "ERROR";
    }
}
