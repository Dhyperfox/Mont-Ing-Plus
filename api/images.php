<?php 
header('Content-type: application/json');
header("Access-Control-Allow-Origin: *");
// Include the database configuration file  
require_once 'db_connect.php'; 
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Get image data from database 

$stmt = $conn->prepare("SELECT description, image_path  FROM `image` ");
$stmt->execute();
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);


foreach($result as $row){

    $desc = $row['description'];
    $image_path = $row['image_path'];

    $image_data[] = array(
        'path'=> $image_path,
        'alt'=> $desc
    );
}

$json_data = json_encode($image_data);
echo($json_data);
$conn = null;
?>