<?php

require_once "./database/router/Router.php";
foreach (glob("./database/router/controller/*.php") as $filename)
{
    require_once $filename;
}

$router = new Router();
$router->error404 = new Route("error", "/error", new ErrorController(404, "Could not find page"));
$router->get(new Route("test", "/test", new LoginController()));
$router->get(new Route("GET AllUser", "/api/user", new GetAllUserController()));