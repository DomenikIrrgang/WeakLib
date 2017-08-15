<?php

interface Database {
    public function connect(DatabaseConnection $connection): bool;
    public function disconnect(): bool;
    public function isConnected(): bool;
    public function executeQuery(string $query): bool;
    public function executePreparedStatement(string $query, string ... $values): bool;
}