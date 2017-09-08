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

/*
    ERRORS
*/
$router->error401 = new Route("error", "/error", new ErrorController(401, "Access denied"));
$router->error404 = new Route("error", "/error", new ErrorController(404, "Could not find page"));
$router->error400 = new Route("error", "/error", new ErrorController(400, "Bad Request"));

/*
    AUTHENTICATION
*/
$router->post((new Route("login", "/login", new LoginController())));
$router->post((new Route("logout", "/logout", new LogoutController())));
$router->get((new Route("isLoggedIn", "/login", new IsLoggedInController())));

/*
    API
*/
$router->get((new Route("get user", "/api/user", new GetAllUserController())));
$router->post(new Route("new user", "/api/user", new RegisterController()));

$router->post(new Route("upload image", "/api/image/upload", new ImageUploadController()));

$router->get(new Route("get weakaura(s)", "/api/weakaura", new GetAllWeakauraController()));
$router->post(new Route("create weakaura", "/api/weakaura", new AddWeakauraController()));