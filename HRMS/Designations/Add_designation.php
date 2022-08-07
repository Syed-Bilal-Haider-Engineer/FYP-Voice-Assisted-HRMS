<?php
error_reporting(0);
include('../Includes/Config.php');
header('Content-Type:application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers: *');
   $designationsvalue=json_decode(file_get_contents('php://input'),true);
   $designation=$designationsvalue['designation'];
   $depart=$designationsvalue['department'];
   $date=date("Y/m/d");

if(!empty($depart) && !empty($designation))
{
$sql = "INSERT INTO designations(Designation,Department,Date)
 VALUES ('{$designation}','{$depart}','{$date}')";
$res=mysqli_query($con,$sql) or die("Designations Query failed".mysqli_error($con));
if($res){
	echo json_encode(array('message' => 'Designations Record Inserted.', 'status' => true));
}else{
 echo json_encode(array('message' => 'Designations Record Not Inserted.', 'status' => false));
}}
else{
   echo json_encode(array('message' => 'All variables is empty.', 'status' => false));
}

   ?>
