<?php
error_reporting(0);
include('../Includes/Config.php');
header('Content-Type:application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers: *');
$clients=json_decode(file_get_contents('php://input'),true);
$id=$clients['id'];

// .........clients delete..............
 if(!empty($id))
 {
    $visterremove= "DELETE FROM `clients` WHERE id='{$id}'";
     $visterremove=mysqli_query($con,$visterremove) or die("clients remove Query".mysqli_error($con));
     if($visterremove)
     {

         echo json_encode(array('message'=>'Delete clients successfully','status'=>true));
     } 
     else{
         echo json_encode(array('message'=>'clients not Delete ','status'=>false));
     }
}

 
?>
