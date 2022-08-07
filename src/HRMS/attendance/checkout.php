<?php
error_reporting(0);
include('../Includes/Config.php');
header('Content-Type:application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers: *');
$attendance=json_decode(file_get_contents('php://input'),true);
$id=$attendance['values'];
date_default_timezone_set("Asia/Karachi");
$today = date("Y-m-d"); 
// fetch data and see the result
$sql = "SELECT * FROM attendance where EmployeeID='{$id}' and curdate='{$today}'";
$sql=mysqli_query($con,$sql) or die("Checkout time query failed");
if (mysqli_num_rows($sql) == 1)
 {
  $row = mysqli_fetch_assoc($sql);
   $in= $row["checkin"];
   $out= date("h:i:s");
   $date= $row["curdate"];
$d1 = new DateTime($in);
 $d2 = new DateTime($out);
 $interval = $d1->diff($d2);
 $time=$interval->format('%h').":".$interval->format('%i');
$status=1;
 $sql="UPDATE `attendance` SET `checkout`='{$out}',`workinghour`='{$time}',`status`='{$status}' WHERE EmployeeID='{$id}' && curdate='{$date}'";
 $sql=mysqli_query($con,$sql) or die("check out update".mysqli_error($con));
 if($sql)
 {
   $result=mysqli_query($con,"SELECT * FROM `attendance`") or die("attendance sql query failed");
if(mysqli_num_rows($result)>0)
{
    $ouput=mysqli_fetch_all($result,MYSQLI_ASSOC);
    echo json_encode(array('message'=>' time track stop','status'=>true,'attedance'=>$ouput));
}
else{
     echo json_encode(array('message'=>'No Record found','status'=>false));
}
 }
 }

$con->close();
?>
