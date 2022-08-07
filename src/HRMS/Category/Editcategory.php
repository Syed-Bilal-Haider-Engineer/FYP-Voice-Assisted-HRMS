<?php
error_reporting(0);
include('../Includes/Config.php');
header('Content-Type:application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:*');
header('Access-Control-Allow-Headers: *');
$status=json_decode(file_get_contents('php://input'),true);

$cat=$status['categoryname'];
$id=$status['values'];
if(!empty($cat) && !empty($id))
{
$sql="UPDATE categories SET catname = '{$cat}' WHERE Catid = '{$id}'";
$query=mysqli_query($con,$sql) or die("Category failed Query".mysqli_error($con));
if($query)
{
//  ....Fetch category...
$result=mysqli_query($con,"SELECT * FROM `categories`") or die("User sql query failed");
if(mysqli_num_rows($result)>0)
{
    $ouput=mysqli_fetch_all($result,MYSQLI_ASSOC);
    echo json_encode(array('message'=>'Category Update successfully','status'=>true,'Editecategory'=>$ouput));
}
else{
     echo json_encode(array('message'=>'No Record found','status'=>false));
}

// ...End category...
}
else
{
    echo json_encode(array('message'=>' Category  not change','status'=>false,));
}
}
?>