<?php
unset($_SESSION["current_user"]);
header('Location: ' . "index.html");
die();