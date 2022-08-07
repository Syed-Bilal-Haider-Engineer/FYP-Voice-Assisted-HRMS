<?php
error_reporting(0);
include('../Includes/Config.php');
header('Content-Type:application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers: *');
   $tasks=json_decode(file_get_contents('php://input'),true);
   $project=$tasks['project'];
   $description=$tasks['description'];
   $status=$tasks['status'];
   $id=$tasks['ID'];
if(!empty($project))
{
$sql = "INSERT INTO tasks(pro_id,task_desc,id,status)
 VALUES ('{$project}','{$description}','{$id}','{$status}')";
$res=mysqli_query($con,$sql) or die("Tasks Query failed".mysqli_error($con));
if($res){
	echo json_encode(array('message' => 'Tasks Record Inserted.', 'status' => true));

}else{

 echo json_encode(array('message' => 'Tasks Record Not Inserted.', 'status' => false));

}
}
else{
   
   echo json_encode(array('message' => 'All variables is empty.', 'status' => false));
}

   ?>
