<?php
    $servername = "mariadb";
    $username = "root";
    $password = "example";
    $dbname = "accounts";

    $user_input = $_POST["user"];
    $password_input = $_POST["pass"];

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    echo "Connected successfully :)<br>";

    $sql = "SELECT username, password FROM users";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            if($row["username"] == $user_input){
                if(password_verify($password_input, $row["password"])){
                    echo "password verified from database";
                }else{
                    echo "password not verified";
                }
            }
            echo "Name: " . $row["username"]. " " . $row["password"]. "<br>";
        }
    } else {
        echo "0 results";
    }
    $conn->close();
?>