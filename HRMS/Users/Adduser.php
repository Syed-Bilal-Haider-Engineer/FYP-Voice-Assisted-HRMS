<?php
error_reporting(0);
include('../Includes/Config.php');
header('Content-Type:application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers: *');
   $user=json_decode(file_get_contents('php://input'),true);
   $username=$user['username'];
   $email=$user['email'];
   $phone=$user['phone'];
   $password=$user['password'];
   $status=1;
   $date=date("Y/m/d");
   // echo $user,"-",$username,"-",$email,"-",$phone;
if(!empty( $username) && !empty( $email) && !empty( $phone) && !empty( $password) && !empty( $status))
{
$sql = "INSERT INTO users(UserName, Email, uPassword, Phone, timeperiod, userstatus)
 VALUES ('{$username}','{$email}','{$password}','{$phone}','{$date}','{$status}')";
$res=mysqli_query($con,$sql) or die("Users Query failed".mysqli_error($con));
if($res){
	echo json_encode(array('message' => 'Users Record Inserted.', 'status' => true));

}else{

 echo json_encode(array('message' => 'Users Record Not Inserted.', 'status' => false));

}
}
else{
   
   json_encode(array('message' => 'All variables is empty.', 'status' => false));
}

   ?>
