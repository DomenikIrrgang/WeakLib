<?php

interface DatabaseEntry
{
    public function toJSON(): String;
    public function fromJSON(string $JSONEntry):DatabaseEntry;
}
