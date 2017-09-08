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
    
    public function request(Request $request, array $params): string
    {
        $request->setResponseCode($errorCode);
        return $this->errorMessage;
    }
}
