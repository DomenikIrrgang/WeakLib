<?php

interface Controller
{
    public function request(array $params): string;
}