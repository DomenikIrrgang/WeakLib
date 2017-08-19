<?php
require_once "./database/router/controller/Controller.php";
$errorCode;
$errorMesssage;

function __construct ($errorCode, $errorMessage){
    $this->errorCode = $errorCode;
    $this->errorMessage = $errorMessage;
}

class ErrorController implements Controller{
    public function request(array $params): string{
       return $this->$errorMsg;
    }

    

}

