<?php

require_once "./router/Request.php";

interface Controller
{
    public function request(Request $request, array $params): string;
}