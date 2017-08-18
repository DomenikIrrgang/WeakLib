<?php

require_once "./database/router/controller/Controller.php";

class LoginController implements Controller
{
    public function request(array $params): string
    {
        echo "ich wurde gecalled";
    }
}
