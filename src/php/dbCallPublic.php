<?php
$_POST = json_decode(file_get_contents('php://input'), true);

$servername = "localhost";
$username = "toot";
$password = "pass";
$dbmane = "root";

$conn = new mysqli($servername, $username, $password, $dbmane);
$conn->set_charset("utf8");

