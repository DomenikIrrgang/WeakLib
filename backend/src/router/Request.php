<?php

require_once "./router/Route.php";

class Request
{
    public $body = "";
    public $ip = "";
    public $uri = "";
    public $host = "";
    public $time = 0;
    public $type = "";
    public $script = "";

    public function __construct(string $ip, string $host, string $uri, string $type, string $body)
    {
        $this->ip = $ip;
        $this->host = $host;
        $this->uri = $uri;
        $this->body = $body;
        $this->type = $type;
        $this->time = time();
        $this->script = "/backend/index.php";
    }

    public function getURL(): string
    {
        return $this->host . $this->uri;
    }

    public static function fromRequest(): Request
    {
        $request = new Request(
            $_SERVER['REMOTE_ADDR'],
            $_SERVER['HTTP_HOST'],
            $_SERVER['REQUEST_URI'],
            $_SERVER['REQUEST_METHOD'],
            file_get_contents('php://input')
        );
        $request->time = $_SERVER['REQUEST_TIME'];
        $request->script = $_SERVER['SCRIPT_NAME'];
        return $request;
    }

    public function redirect(Route $route)
    {
        $this->setBaseURI($route->getPattern());
    }

    public function setBaseURI(string $baseUri)
    {
        $base = substr($this->uri, 0, strpos($this->uri, $this->getBaseURI()));
        $this->uri = $base . $baseUri;
    }

    public function getBaseURI(): string
    {
        $uri = $this->uri;
        $basepath = implode('/', array_slice(explode('/', $this->script), 0, -1)) . '/';
        $uri = substr($this->uri, strlen($basepath));
        $uri = '/' . trim($uri, '/');
        return $uri;
    }
}
