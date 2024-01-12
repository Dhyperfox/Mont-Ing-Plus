<?php

 //header('Access-Control-Allow-Origin: http://localhost:3000');
$servername = "localhost:3306";
$username = "montingp_user";
$password = "HubaMonting996!!+";

try {
  $conn = new PDO("mysql:host=$servername;dbname=montingp_database", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
 // echo "Connected successfully";
} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}
?> 