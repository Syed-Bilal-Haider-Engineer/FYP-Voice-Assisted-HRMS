<?php
error_reporting(0);
include('../Includes/Config.php');
header('Content-Type:application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers: *');
$holidays=json_decode(file_get_contents('php://input'),true);
$id=$holidays['values'];
$holidayname=$holidays['holdayname'];
$holidaydate=$holidays['holidaydatestate'];
// .........holiday delete..............
 if(!empty($id))
 {
    $visterremove= "UPDATE `holidays` SET `Holiday_Name`='{$holidayname}',`Holiday_Date`='{$holidaydate}'WHERE id='{$id}'";
     $visterremove=mysqli_query($con,$visterremove) or die("holidays update Query".mysqli_error($con));
     if($visterremove)
     {
   // ...Holiday fetch query...
   $result=mysqli_query($con,"SELECT * FROM `holidays`") or die("Holiday sql query failed");
       $ouput=mysqli_fetch_all($result,MYSQLI_ASSOC);
       echo json_encode(array('message' => 'update holidays successfully', 'status' => true,'holidaydetails'=>$ouput));
   
// .......End query.....
       
     } 
     else{
         echo json_encode(array('message'=>'holidays not update ','status'=>false));
     }
    //  ............Delete Jobs............
   
}
?>