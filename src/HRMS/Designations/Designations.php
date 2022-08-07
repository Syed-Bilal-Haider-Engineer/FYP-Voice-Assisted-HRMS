<?php
include_once('../Includes/Config.php');
header('Content-Type:application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS');

 $sql="SELECT designations.id,designations.Designation,designations.Department,departments.Department,departments.id
FROM `designations`
INNER JOIN `departments` ON designations.Department=departments.id ";

$result=mysqli_query($con,$sql) or die("designations sql query failed".mysqli_error($con));

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

