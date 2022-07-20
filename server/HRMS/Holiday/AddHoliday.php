<?php
error_reporting(0);
include('../Includes/Config.php');
header('Content-Type:application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers: *');
   $holiday=json_decode(file_get_contents('php://input'),true);
   $Holiday_Name=$holiday['holiday'];
   $depart=$holiday['date'];
   $date=date("Y/m/d");

if(!empty($Holiday_Name) && !empty($depart))
{
$sql = "INSERT INTO holidays(Holiday_Name,Holiday_Date,DateTime)
 VALUES ('{$Holiday_Name}','{$depart}','{$date}')";
$res=mysqli_query($con,$sql) or die("Holiday Query failed".mysqli_error($con));
if($res){
	echo json_encode(array('message' => 'Holiday Record Inserted.', 'status' => true));
}else{
 echo json_encode(array('message' => 'Holiday Record Not Inserted.', 'status' => false));
}
}
else{
   echo json_encode(array('message' => 'All variables is empty.', 'status' => false));
}

   ?>
