<?php
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "Munet@05", "ecareer_guidance");

if ($conn->connect_error) {
  echo json_encode(["status" => "error", "message" => "Database connection failed"]);
  exit;
}

$email = $_POST['email'];
$password = $_POST['password'];

$query = $conn->prepare("SELECT * FROM users WHERE email = ?");
$query->bind_param("s", $email);
$query->execute();
$result = $query->get_result();
$user = $result->fetch_assoc();

if ($user && password_verify($password, $user['password'])) {
  echo json_encode(["status" => "success", "message" => "Login successful", "user" => $user]);
} else {
  echo json_encode(["status" => "error", "message" => "Invalid email or password"]);
}
?>
