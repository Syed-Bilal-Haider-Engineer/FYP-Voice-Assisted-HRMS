<?php
error_reporting(0);
include('../Includes/Config.php');
header('Content-Type:application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers: *');
$status=json_decode(file_get_contents('php://input'),true);
$projectstatus=$status['status'];
$id=$status['projectid'];
if(!empty($id))
{  
$sql="UPDATE project SET `status` = '{$projectstatus}' WHERE project_id = '{$id}'";
$query=mysqli_query($con,$sql) or die("project status failed Query".mysqli_error($con));
if($query)
{ 
$result=mysqli_query($con,"SELECT * FROM `project` ") or die("project sql query failed");
if(mysqli_num_rows($result)>0)
{
    $ouput=mysqli_fetch_all($result,MYSQLI_ASSOC);
    echo json_encode(array('message'=>'project status change successfully','status'=>true,'projectdetails'=>$ouput));
}
else{
     echo json_encode(array('message'=>'No Record found','status'=>false));
}
}}
else
{
    echo json_encode(array('message'=>'project status  not change','status'=>false));
}

?>