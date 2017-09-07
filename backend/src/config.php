<?php

$config = [];

/*
    Environment Variables
*/

$config["environment"] = [];
$config["environment"]["debug"] = true;


/*
    Image Upload
*/
$config["imageupload"]["directory"] = "./img/";
$config["imageupload"]["maxSize"] = 1024000;


/* 
    Database Config
*/
$config["database"] = [];
$config["database"]["ip"] = "127.0.0.1";
$config ["database"]["name"]="weaklib";
$config ["database"]["username"]="root";
$config ["database"]["password"] ="root";
$config ["database"]["port"]= 3306;
