<?php

require_once "./database/router/Router.php";
require_once "./database/router/controller/LoginController.php";

$router = new Router();
$router->get(new Route("test", "/test", new LoginController()));