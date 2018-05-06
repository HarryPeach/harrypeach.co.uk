<?php
session_start();
include("server_vars.php");
$conn = new mysqli($servername, $username, $password, $dbname);

$user_input = mysqli_real_escape_string($conn, $_POST["user"]);
$password_input = mysqli_real_escape_string($conn, $_POST["pass"]);

if(!isset($user_input) || !isset($password_input)){
    echo "Please provide a username and password"; // ERROR - no username and or password
    die;
}


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error); // ERROR - database connection failed
}

$sql = "SELECT username, password FROM users";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        if($row["username"] == $user_input){
            if(password_verify($password_input, $row["password"])){
                echo "password verified from database";
                $_SESSION['current_user']= $row["username"];
            }else{
                echo "password not verified";
            }
        }
    }
} else {
    echo "0 results";
}
$conn->close();
?>