<?php
error_reporting(0);
include('../Includes/Config.php');
header('Content-Type:application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers: *');
$holidays=json_decode(file_get_contents('php://input'),true);
$id=$holidays['id'];

// .........Category delete..............
 if(!empty($id))
 {
    $visterremove= "DELETE FROM `holidays` WHERE id='{$id}'";
     $visterremove=mysqli_query($con,$visterremove) or die("holidays remove Query".mysqli_error($con));
     if($visterremove)
     {
   // ...Holiday fetch query...
   $result=mysqli_query($con,"SELECT * FROM `holidays`") or die("Holiday sql query failed");
       $ouput=mysqli_fetch_all($result,MYSQLI_ASSOC);
       echo json_encode(array('message' => 'Delete holidays successfully', 'status' => true,'holidaydetails'=>$ouput));
   
// .......End query.....
       
     } 
     else{
         echo json_encode(array('message'=>'holidays not Delete ','status'=>false));
     }
    //  ............Delete Jobs............
   
}
?>
