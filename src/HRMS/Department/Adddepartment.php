<?php
error_reporting(0);
include('../Includes/Config.php');
header('Content-Type:application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers: *');
   $depart=json_decode(file_get_contents('php://input'),true);
   $departname=$depart['department'];
   $date=date("Y/m/d");

if(!empty($departname))
{
$sql = "INSERT INTO departments(Department)
 VALUES ('{$departname}')";
$res=mysqli_query($con,$sql) or die("Department Query failed".mysqli_error($con));
if($res){
	echo json_encode(array('message' => 'Department Record Inserted.', 'status' => true));

}else{

 echo json_encode(array('message' => 'Department Record Not Inserted.', 'status' => false));

}
}
else{
   
   echo json_encode(array('message' => 'All variables is empty.', 'status' => false));
}

   ?>
