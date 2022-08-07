<?php
error_reporting(0);
include('../Includes/Config.php');
header('Content-Type:application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers: *');
$status=json_decode(file_get_contents('php://input'),true);
$id=$status['id'];
$statusselection=$status['status'];

if(!empty($statusselection) && !empty($id))
{
$sql="UPDATE userapplication SET `status` = '{$statusselection}' WHERE id = '{$id}'";
$query=mysqli_query($con,$sql) or die("User applications status failed Query".mysqli_error($con));
if($query)
{
    $sql="SELECT * FROM `visters` INNER JOIN `userapplication` ON visters.id=userapplication.visterId";

$result=mysqli_query($con,$sql) or die("Employee sql query failed".mysqli_error($con));
if(mysqli_num_rows($result)>0)
{
    $Appstatus=1;
    $ouput=mysqli_fetch_all($result,MYSQLI_ASSOC);
    echo json_encode(array('message'=>'user application status successfully','status'=>true,'applicationstatus'=>$ouput,'Appstatus'=> $Appstatus));
}}
else
{
    echo json_encode(array('message'=>'user application status  not change','status'=>false,));
}}
?>