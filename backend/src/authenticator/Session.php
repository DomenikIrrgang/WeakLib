<?php

class Session
{
    private $running = false;
    private $values = [];

    public function __construct()
    {
        $this->start();
    }

    public function start(): void
    {
        if (!isCommandLineInterface()) {
            session_start();
        }
        $this->running = true;
    }

    public function destroy(): void
    {
        if (isCommandLineInterface()) {
            session_destroy();
        }
        $this->running = false;
    }

    public function setValue(string $key, $value): void
    {
        if (isCommandLineInterface()) {
            $this->values[$key] = $value;
        } else {
            $_SESSION[$key] = $value;
        }
    }

    public function getValue(string $key)
    {
        if (isCommandLineInterface()) {
            return $this->values[$key];
        }
        return $_SESSION[$key];
    }

    public function hasKey(string $key): bool
    {
        if (isCommandLineInterface()) {
            return array_key_exists($key, $this->values);
        } else {
            return array_key_exists($key, $_SESSION);
        }
    }

    public function getValues(): array
    {
        if (isCommandLineInterface()) {
            return $this->values;
        } else {
            return $_SESSION;
        }
    }
}
