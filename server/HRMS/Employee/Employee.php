<?php
include_once('../Includes/Config.php');
header('Content-Type:application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS');

 $sql="SELECT *  FROM `employee`
INNER JOIN `userapplication` ON employee.applicationid=userapplication.visterId
INNER JOIN `visters` ON visters.id=userapplication.visterId ";

$result=mysqli_query($con,$sql) or die("Employee sql query failed".mysqli_error($con));

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

