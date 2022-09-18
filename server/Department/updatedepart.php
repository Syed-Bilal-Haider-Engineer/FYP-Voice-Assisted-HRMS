<?php
error_reporting(0);
include('../Includes/Config.php');
header('Content-Type:application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers: *');
$depart=json_decode(file_get_contents('php://input'),true);
$id=$depart['values'];
$department=$depart['namestate'];

// .........department delete..............
 if(!empty($id))
 {
    $visterremove= "UPDATE `departments` SET `Department`='{$department}'WHERE id='{$id}'";
     $visterremove=mysqli_query($con,$visterremove) or die("department update Query".mysqli_error($con));
     if($visterremove)
     {
   // ...department fetch query...
   $result=mysqli_query($con,"SELECT * FROM `departments`") or die("department sql query failed");
       $ouput=mysqli_fetch_all($result,MYSQLI_ASSOC);
       echo json_encode(array('message' => 'update departments successfully', 'status' => true,'departments'=>$ouput));
   
// .......End query.....
       
     } 
     else{
         echo json_encode(array('message'=>'departments not update ','status'=>false));
     }
    //  ............Delete Jobs............
   
}
?>