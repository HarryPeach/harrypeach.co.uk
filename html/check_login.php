<?php
session_start();
include("server_vars.php");

if (!isset($_SESSION["current_user"])){
    echo "You are not logged in.";
    die();
}

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error); // ERROR - database connection failed
}

$sql = "SELECT username, first_name, last_name, email FROM users WHERE username='" . $_SESSION["current_user"] . "'";
$result = $conn->query($sql);
$row = $result->fetch_assoc();
echo $row["first_name"];
echo $row["last_name"];
echo $row["email"];