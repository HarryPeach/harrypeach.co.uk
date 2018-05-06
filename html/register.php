<?php

$pass = $_POST["pass"];
$hash = password_hash($pass, PASSWORD_DEFAULT);
echo $hash;

?>