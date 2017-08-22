<?php

interface Middleware 
{
    public function onRequest(Request $request, Route $route): Route;
}