<?php
error_reporting(0);
include('../Includes/Config.php');
header('Content-Type:application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers: *');
$leave=json_decode(file_get_contents('php://input'),true);
$id=$leave['id'];

// .........Category delete..............
 if(!empty($id))
 {
    $leaves= "DELETE FROM `leaves` WHERE id='{$id}'";
     $leavesremove=mysqli_query($con,$leaves) or die("Leave remove Query".mysqli_error($con));
     if($leavesremove)
     {

         echo json_encode(array('message'=>'Remove leave successfully','status'=>true));
     } 
     else{
         echo json_encode(array('message'=>'leave not remove  ','status'=>false));
     }
    //  ............Delete Jobs............
   
}

 
?>
