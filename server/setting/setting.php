<?php
error_reporting(0);
include('../Includes/Config.php');
header('Content-Type:application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers: *');
   $setting=json_decode(file_get_contents('php://input'),true);
   $date=date("Y/m/d");
   $cname=$setting['cname'];
   $conperson=$setting['conperson'];
   $address=$setting['address'];
   $email=$setting['email'];
   $mobile=$setting['mobile'];
   $phone=$setting['phone'];
   $weburl=$setting['weburl'];
 
if(!empty($cname) && !empty($mobile))
{
$sql = "INSERT INTO `setting`(`cname`, `conperson`, `adddress`, `email`, `phonenum`, `mobilenum`, `websiteurl`)
 VALUES ('{$cname}','{$conperson}','{$address}','{$email}','{$mobile}','{$phone}','{$weburl}')";
$res=mysqli_query($con,$sql) or die("Setting Query failed".mysqli_error($con));
if($res){
   // ...setting fetch query...
   $result=mysqli_query($con,"SELECT * FROM `setting`") or die("Setting sql query failed");
   if(mysqli_num_rows($result)>0)
   {
       $ouput=mysqli_fetch_all($result,MYSQLI_ASSOC);
       echo json_encode(array('message' => 'Setting Record Inserted.', 'status' => true,'setting'=>$ouput));
   }
// .......End query.....
}else{
 echo json_encode(array('message' => 'Setting Record Not Inserted.', 'status' => false));
}
}
else{
   echo json_encode(array('message' => 'All variables is empty.', 'status' => false));
}

   ?>
