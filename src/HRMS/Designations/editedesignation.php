<?php
error_reporting(0);
include('../Includes/Config.php');
header('Content-Type:application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers: *');
$designation=json_decode(file_get_contents('php://input'),true);
$id=$designation['values'];
$designationvalue=$designation['namestate'];

// .........department delete..............
 if(!empty($id))
 {
    $design= "UPDATE `designations` SET `Designation`='{$designationvalue}'WHERE id='{$id}'";
     $design=mysqli_query($con,$design) or die("designations update Query".mysqli_error($con));
     if($design)
     {
   // ...department fetch query...
   $result=mysqli_query($con,"SELECT * FROM `designations`") or die("designations sql query failed");
       $ouput=mysqli_fetch_all($result,MYSQLI_ASSOC);
       echo json_encode(array('message' => 'update designations successfully', 'status' => true,'designations'=>$ouput));
// .......End query....
     } 
     else{
         echo json_encode(array('message'=>'designations not update ','status'=>false));
     }
    //  ............Delete Jobs............
   
}
?>