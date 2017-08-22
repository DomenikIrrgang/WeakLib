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
$router->post((new Route("login", "/login", new LoginController())));
$router->post((new Route("logout", "/logout", new LogoutController())));
$router->get((new Route("GET AllUser", "/api/user", new GetAllUserController()))->middleware(new AuthMiddleware()));
$router->post(new Route("register user", "/api/user", new RegisterController()));