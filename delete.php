<?php
include "db.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = intval($_POST['id'] ?? 0);

    if ($id > 0) {
        $stmt = $conn->prepare("DELETE FROM products WHERE id = ?");
        $stmt->bind_param("i", $id);
        if ($stmt->execute()) {
            echo "Deleted!";
        } else {
            echo "Delete failed: " . $stmt->error;
        }
        $stmt->close();
    } else {
        echo "Invalid ID.";
    }
}
?>
