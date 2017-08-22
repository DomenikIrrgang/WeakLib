<?php

function encryptPassword(string $password): string
{
    $options = [
        'cost' => 10,
    ];
    return password_hash($password, PASSWORD_BCRYPT, $options);
}

function passwordMatch(string $password, string $hash)
{
    return password_verify($password, $hash);
}

function isCommandLineInterface()
{
    return (php_sapi_name() === 'cli');
}
