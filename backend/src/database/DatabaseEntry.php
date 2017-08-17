<?php

interface DatabaseEntry
{
    public function toJSON(): String;
    public function fromJSON(string $JSONEntry): void;
    public function getValue(string $key);
    public function getKeys(): array;
    public function getValues(): array;
    public function setValue(string $key, $value);
}
