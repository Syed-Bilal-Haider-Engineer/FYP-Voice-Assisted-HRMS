<?php
error_reporting(0);
include('../Includes/Config.php');
header('Content-Type:application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers: *');

// $sql="SELECT * FROM tasks INNER JOIN project ON tasks.pro_id=project.project_id";

$result=mysqli_query($con,"SELECT * FROM `project` ") or die("User sql query failed");
if(mysqli_num_rows($result)>0)
{
    $ouput=mysqli_fetch_all($result,MYSQLI_ASSOC);
    $result=json_encode($ouput);
    echo $result;
}
else{
     echo json_encode(array('message'=>'No Record found','status'=>false));
}
?>