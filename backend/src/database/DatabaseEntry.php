<?php

interface DatabaseEntry
{
    public function toJSON(): String;
    public function fromJSON(string $JSONEntry): void;
    public function getValue(string $key);
}
