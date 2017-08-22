<?php

require_once "./router/controller/Controller.php";

class LoginController implements Controller
{
    public function request(array $params): string
    {
        var_dump($params);
        return "TEST";
    }
}
