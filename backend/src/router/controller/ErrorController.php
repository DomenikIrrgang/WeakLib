<?php
require_once "./router/controller/Controller.php";

class ErrorController implements Controller
{
    private $errorCode = "";
    private $errorMesssage = "";
    
    function __construct($errorCode, $errorMessage)
    {
        $this->errorCode = $errorCode;
        $this->errorMessage = $errorMessage;
    }
    
    public function request(array $params): string
    {
        return $this->errorMessage;
    }
}
