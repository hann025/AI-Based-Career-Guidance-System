<?php
$host = 'localhost';
$dbname = 'ecareer_guidance'; // actual database name
$username = 'root';
$password = 'Munet@05'; // password

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // echo "DB connected!";
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>
