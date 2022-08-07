<?php
error_reporting(0);
include('../Includes/Config.php');
header('Content-Type:application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers: *');
   $notice=json_decode(file_get_contents('php://input'),true);
   $subject=$notice['subject'];
   $description=$notice['notice'];
 $currentDateTime = date('Y-m-d');
if(!empty($notice) && !empty($subject))
{
$sql = "INSERT INTO noticeboard(title,notice_desc,date)
 VALUES ('{$subject}','{$description}','{$currentDateTime}')";
$res=mysqli_query($con,$sql) or die("Notice Query failed".mysqli_error($con));
if($res){
   $sql="SELECT * FROM noticeboard ";
$result=mysqli_query($con,$sql) or die("Noticeboard sql query failed");
if(mysqli_num_rows($result)>0)
{
    $ouput=mysqli_fetch_all($result,MYSQLI_ASSOC);
    echo json_encode(array('message' => 'Notice Record Inserted.', 'status' => true,'notice'=>$ouput));
} 
}else{
 echo json_encode(array('message' => 'Notice Record Not Inserted.', 'status' => false));
}
}
else{
   echo json_encode(array('message' => 'All variables is empty.', 'status' => false));
}

   ?>
