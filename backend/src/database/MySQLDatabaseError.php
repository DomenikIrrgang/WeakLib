<?php

require_once "./database/DatabaseError.php";

class MySQLDatabaseErrorType
{
    const DUPLICATE_ENTRY = 1;
    const UNKNOWN_ERROR = -1;

    public static function getErrorType(string $message)
    {
        if (strpos($message, 'Duplicate') !== false) {
            return self::DUPLICATE_ENTRY;
        }
        return self::UNKNOWN_ERROR;
    }
}

class MySQLDatabaseError implements DatabaseError
{
    public $fieldName = "";
    public $errorType;
    private $message;

    public function __construct($message)
    {
        $this->errorType = MySQLDatabaseErrorType::getErrorType($message);
        $this->fieldName = $this->getField($message);
        $this->message = $message;
    }
    
    private function getField($message): string
    {
        $keyPos = strpos($message, 'key') + 5;
        $afterKeyPos = substr($message, $keyPos);
        $keyEnd = strpos($afterKeyPos, "'");
        return substr($message, $keyPos, $keyEnd); 
    }

    public function getMessage(): string
    {
        return $this->message;
    }
}
