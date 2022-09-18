<?php
error_reporting(0);
include('../Includes/Config.php');
header('Content-Type:application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers: *');
define('DISH_NAME',$_SERVER['DOCUMENT_ROOT']."/HRMS/Uploads/");

$firstname=$_POST['firstname'];
$lastname=$_POST['lastname'];
$username=$_POST['username'];
$email=$_POST['email'];
$clientid=$_POST['clientid'];
$phone=$_POST['phone'];
$company=$_POST['company'];
$address=$_POST['address'];
$date=date('Y-m-d');
$status=1;
if(!empty($firstname) && !empty($lastname) && !empty($username) && !empty($email) && !empty($phone))
{
if(isset($_FILES['img'])){
    $file_name = $_FILES['img']['name'];
    $file_size = $_FILES['img']['size'];
    $file_tmp = $_FILES['img']['tmp_name'];
    $file_type = $_FILES['img']['type'];
    $file_ext = end(explode('.',$file_name));
   $error=true;
    $extensions = array("jpeg","jpg","png");
    if(in_array($file_ext,$extensions) === false)
    {
 echo 'This extension file not allowed, Please choose a JPG or PNG file.';
 $error=false;
    }
    if($file_size > 2097152){
      echo 'File size must be 2mb or lower.';
      $error=false;
    }
   if($error==true)
   {
    $new_name = time(). "-".basename($file_name);
      $sql = "INSERT INTO clients(FirstName,LastName, UserName, Email,ClientId, Phone, Company,Address,Status,Picture,date)
      VALUES ('{$firstname}','{$lastname}','{$username}','{$email}','{$clientid}','{$phone}','{$company}','{$address}','{$status}', '{$new_name}','{$date}')";
     $res=mysqli_query($con,$sql) or die("Client Query failed".mysqli_error($con));
     if($res){
        move_uploaded_file($file_tmp,DISH_NAME.$new_name);
        $sql="SELECT *  FROM `clients`";
        $result=mysqli_query($con,$sql) or die("Client sql query failed".mysqli_error($con));
        if(mysqli_num_rows($result)>0)
        {
            $ouput=mysqli_fetch_all($result,MYSQLI_ASSOC);
            echo json_encode(array('message' => 'Client save successfully', 'status' => true,'clients'=>$ouput));
         }
     }else{
      echo "Client not save.";
     }
   }
  }}
?>
