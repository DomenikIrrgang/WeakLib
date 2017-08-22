<?php

require_once "./router/Router.php";
foreach (glob("./router/controller/*.php") as $filename)
{
    require_once $filename;
}

foreach (glob("./router/middleware/*.php") as $filename)
{
    require_once $filename;
}

$router = new Router();
$router->error401 = new Route("error", "/error", new ErrorController(401, "Access denied"));
$router->error404 = new Route("error", "/error", new ErrorController(404, "Could not find page"));
$router->get((new Route("test", "/test", new LoginController()))->middleware(new AuthMiddleware()));
$router->get(new Route("GET AllUser", "/api/user", new GetAllUserController()));
$router->post(new Route("register user", "/api/user", new RegisterController()));