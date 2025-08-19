<?php
include "db.php";

$result = $conn->query("SELECT * FROM products ORDER BY id DESC");
$rows = [];

while ($row = $result->fetch_assoc()) {
    $rows[] = $row;
}

header('Content-Type: application/json');
echo json_encode($rows);
?>
