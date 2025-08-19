<?php
$host = "localhost";
$user = "root";
$password = "";
$dbname = "inventory_db";

$conn = new mysqli($host, $user, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Optional: Set character set to UTF-8
$conn->set_charset("utf8mb4");
?>
