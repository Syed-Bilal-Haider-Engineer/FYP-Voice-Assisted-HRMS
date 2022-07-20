<?php
error_reporting(0);
include('../Includes/Config.php');
header('Content-Type:application/json,charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers: *');
   $user=json_decode(file_get_contents('php://input'),true);
   $category=$user['category'];
   if(!empty($category))
   {
   $sql = "INSERT INTO categories(catname) VALUES ('{$category}')";
   $res=mysqli_query($con,$sql) or die("Category Query failed".mysqli_error($con));
   if($res){
       echo json_encode(array('message' => 'Category save sucessfully.', 'status' => true));
   
   }else{
   
    echo json_encode(array('message' => 'Category not save.', 'status' => false));
   
   }
   }
   else{
      
     echo json_encode(array('message' => 'All variables is empty.', 'status' => false));
   }
   ?>