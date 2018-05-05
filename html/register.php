<?php

$pass = $_GET["pass"];
$user = $_GET["user"];

$hash = password_hash($pass, PASSWORD_DEFAULT);

echo $hash;

if(password_verify("password", $hash)){
    echo "verifed";
}else{
    echo "hash verification error";
}

?>