<?php 
// Include the database configuration file  
require_once 'db_connect.php'; 
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
// Get image data from database 

header("Access-Control-Allow-Headers: access");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
//header('Content-type: application/json');

$id = $_POST['id']['id'];
// Delete file from server 
$sql = "SELECT image_path FROM `image` WHERE id =:id";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':id', $id);
$stmt->execute();
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
foreach($result as $row){
  $image_path = $row['image_path'];//                            |-->  itt vagja le az eleresi utat 
  $path = explode("g/",$image_path); //https://127.0.0.0/Monting/uploads/64021-42613.jpg 
  $relative_path = "../".$path[1];   // ..//uploads/64021-42613.jpg 
  unlink($relative_path);
}
// Delete path from database


  $sql = "DELETE FROM image WHERE id = :id";
  $stmt = $conn->prepare($sql);
  $stmt->bindParam(':id', $id);
  $stmt->execute();

  $json_data = json_encode("Image deleted");
  echo($json_data);
  $conn = null;
?>