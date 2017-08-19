<?php

require_once "./database/router/Router.php";
require_once "./database/router/controller/ErrorController.php";
require_once "./database/router/controller/LoginController.php";

$router = new Router();
$router->error404 = new Route("error", "/error", new ErrorController(404, "Could not find page"));
$router->get(new Route("test", "/test", new LoginController()));