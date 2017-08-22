<?php

require_once "./router/middleware/Middleware.php";

class AuthMiddleware implements Middleware
{
    public function onRequest(Request $request, Route $route): Route
    {
        global $router;
        global $session;
        if ($session->hasKey("authentication"))
        {
            if ($session->getValue("authentication")->isAuthenticated()) {
                return $route;
            }
        }
        return $router->error401;
    }
}