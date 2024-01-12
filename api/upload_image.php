<?php
 header('Access-Control-Allow-Origin: *');
 header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
 require_once 'db_connect.php'; 
 ini_set('display_errors', 1);
 ini_set('display_startup_errors', 1);
 error_reporting(E_ALL);

$response = array();

$arrContextOptions= [
    'ssl' => [
        'cafile' => '/path/to/bundle/cacert.pem',
        'verify_peer'=> true,
        'verify_peer_name'=> true,
    ],
]; 

$upload_dir = '../uploads/'; 
$server_url = 'https://127.0.0.0';

if($_FILES['file'])
{
    $a = $_POST['file']['password'];
    $desc = $_POST['file']['desc'];
    if($a == "test"){
    $count = count($_FILES['file']['name']);
    for ($i = 0; $i < $count; $i++) {

        $file_name = $_FILES["file"]["name"][$i];
        $file_tmp_name = $_FILES["file"]["tmp_name"][$i];
        $error = $_FILES["file"]["error"][$i];
    
        if($error > 0){
            array_push($response,array(
                "status" => "error",
                "error" => true,
                "message" => "Error uploading the file!"
            ));
        }
        else 
        {
            $random_name = rand(1000,1000000)."-".$file_name;
            $upload_name = $upload_dir.strtolower($random_name);
            $upload_name2 = strtolower($random_name);
            $upload_name = preg_replace('/\s+/', '-', $upload_name);
            if (!file_exists($upload_dir))
            {
               @mkdir($upload_dir, 0777);
               
               array_push($response,array(
                "dir" => "Directory created at: ". $upload_dir
              ));
            }
            else{
                array_push($response,array(
                    "dir" => "Directory exists at: ". $upload_dir
                  ));
            }      
            
            if(move_uploaded_file($file_tmp_name , $upload_name)) {

                // Convert uploaded file into Base64
                $path = './'.$upload_name;
                $type = pathinfo($path, PATHINFO_EXTENSION);
                $data = file_get_contents($path);
                $base64URL = 'data:image/' . $type . ';base64,' . base64_encode($data);

                array_push($response,array(
                "status" => "success",
                "error" => false,
                "message" => "File uploaded successfully",
                "url" => $server_url."/".$upload_name,
                "base64" => $base64URL,
                "total" => $count,
                "name" =>$upload_name2,
                "desc" => $desc
                // "log" => array(
                //     "name" =>$upload_name2,                        
                //     "path" => $path,
                //     "type" => $type,
                //     "data" => $base64URL
                // )
                    
                  ));
                  $p = $server_url."/Monting/uploads/".$random_name;
                    $sql = "INSERT into image (name, description, image_path) VALUES (:name,:description, :image_path)";
                    $stmt = $conn->prepare($sql);
                    $stmt->bindParam(':name', $upload_name2);
                    $stmt->bindParam(':description', $desc);
                    $stmt->bindParam(':image_path', $p);
                    $stmt->execute();
            }
            else
            {
                array_push($response,array(
                    "status" => "danger",
                    "error" => true,
                    "url" =>  $file_name,
                    "message" => "Error uploading the file!"
                    
                ));
            }
        }
    }
    }
    else{
        array_push($response,array(
            "status" => "error",
            "error" => true,            
            "message" => "wrong password: " . $a
            
        ));
    }
}else{
    $response = array(
        "status" => "error",
        "error" => true,
        "message" => print_r($_FILES['file'])
    );
}

echo json_encode($response);
$conn = null;

?>
