<?php
error_reporting(0);
include('../Includes/Config.php');
header('Content-Type:application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers: *');
$status=json_decode(file_get_contents('php://input'),true);

$statusLeave=$status['status'];
$leaveid=$status['leaveid'];
$id=$status['id'];
if(!empty($statusLeave) && !empty($id))
{
$sql="UPDATE leaves SET status = '{$statusLeave}' WHERE EmployeeID = '{$id}' && id='{$leaveid}'";
$query=mysqli_query($con,$sql) or die("leave status failed Query".mysqli_error($con));
if($query)
{
    $sql="SELECT *  FROM `leaves`";
    $result=mysqli_query($con,$sql) or die("Employee leave sql query failed".mysqli_error($con));
    if(mysqli_num_rows($result)>0)
    {
        $ouput=mysqli_fetch_all($result,MYSQLI_ASSOC);
        echo json_encode(array('message' => 'Leave status change', 'status' => true,'leavedetails'=>$ouput));
     }
    // echo json_encode(array('message'=>'','status'=>true));
    // die();
}
else
{
    echo json_encode(array('message'=>'Leave status  not change','status'=>false,));
}
}
?>