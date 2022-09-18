<?php
error_reporting(0);
include('../Includes/Config.php');
header('Content-Type:application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers: *');
$clientstatus=json_decode(file_get_contents('php://input'),true);

$status=$clientstatus['status'];
$id=$clientstatus['id'];

if(!empty($id))
{
$sql="UPDATE clients SET `status` = '{$status}' WHERE id = '{$id}'";
$query=mysqli_query($con,$sql) or die("Client status failed Query".mysqli_error($con));
if($query)
{
    $sql="SELECT *  FROM `clients`";
    $result=mysqli_query($con,$sql) or die("Client leave sql query failed".mysqli_error($con));
    if(mysqli_num_rows($result)>0)
    {
        $ouput=mysqli_fetch_all($result,MYSQLI_ASSOC);
        echo json_encode(array('message' => 'Client status change', 'status' => true,'clients'=>$ouput));
     }
}
else
{
    echo json_encode(array('message'=>'clients status  not change','status'=>false,));
}
}
?>