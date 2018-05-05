<?php
    $servername = "mariadb";
    $username = "root";
    $password = "example";
    $dbname = "accounts";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    echo "Connected successfully :)<br>";

    $sql = "SELECT * FROM users";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            echo "id: " . $row["user_id"]. " - Name: " . $row["first_name"]. " " . $row["last_name"]. "<br>";
        }
    } else {
        echo "0 results";
    }
    $conn->close();
?>