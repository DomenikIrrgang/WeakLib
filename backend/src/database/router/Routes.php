<?php

require_once "./Router.php";
require_once "./controller/LoginController.php";

$router = new Router();

$router->get(new Route("test", "/test", new LoginController()));