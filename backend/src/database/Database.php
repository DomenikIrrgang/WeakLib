<?php

interface Database {
    public function connect(DatabaseConnection $connection): bool;
    public function disconnect(): bool;
    public function isConnected(): bool;
    public function executeQuery(string $query): bool;
    public function executePreparedStatement(string $query, array $values);
    public function getExecutePreparedStatement(string $query, array $values): array;
    public function getExecuteQuery(string $query): array;
}