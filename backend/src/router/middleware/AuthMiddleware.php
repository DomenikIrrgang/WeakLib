<?php

require_once "./router/middleware/Middleware.php";

class AuthMiddleware implements Middleware
{
    public function onRequest(Request $request, Route $route): Route
    {
        global $router;
        return $router->error401;
    }
}