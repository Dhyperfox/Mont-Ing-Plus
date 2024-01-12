<?php 
header("Access-Control-Allow-Headers: access");
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header('Content-type: application/json');

// Include the database configuration file  
require_once 'db_connect.php'; 
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Get image data from database 

$stmt = $conn->prepare("SELECT id, name, description, image_path  FROM `image` LIMIT 10");
$stmt->execute();
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);

// ssl certificate ellenorzes kikapcsolva
$arrContextOptions= [
    'ssl' => [
        'cafile' => '/path/to/bundle/cacert.pem',
        'verify_peer'=> false,
        'verify_peer_name'=> false
    ],
]; 
foreach($result as $row){
    $id = $row['id'];
    $name = $row['name'];
    $desc = $row['description'];
    $image = $row['image_path'];
    $data =file_get_contents($image,false,stream_context_create($arrContextOptions));
    $base64URL = base64_encode($data);

    $image_data[] = array(
        'id'=> $id,
        'name'=> $name,
        'description'=> $desc,
        'image'=> $base64URL
    );
}

$json_data = json_encode($image_data);
echo($json_data);
$conn = null;
?>