<?php
error_reporting(0);
include('../Includes/Config.php');
header('Content-Type:application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers: *');
define('DISH_NAME',$_SERVER['DOCUMENT_ROOT']."/HRMS/Uploads/");
$username=$_POST['username'];
$email=$_POST['email'];
$password=$_POST['password'];
$department=$_POST['department'];
$designations=$_POST['designation'];
$currentDateTime = date('Y-m-d');
$author=1;
if(!empty($username) && !empty($password) && !empty($email) && !empty($department))
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
 echo json_encode(array('message' => 'This extension file not allowed, Please choose a JPG or PNG file.', 'status' => false));
 $error=false;
    }
    if($file_size > 2097152){
      
      echo json_encode(array('message' => 'File size must be 2mb or lower.', 'status' => false));
      $error=false;
    }
   if($error==true)
   {
    
    $new_name = time(). "-".basename($file_name);
      $sql = "INSERT INTO employee(applicationid,email, password,department,designations, DateTime,picture,role)
      VALUES ('{$username}','{$email}','{$password}','{$department}','{$designations}','{$currentDateTime}','{$new_name}','{$author}')";
     $res=mysqli_query($con,$sql) or die("Employee Query failed".mysqli_error($con));
     if($res){
        move_uploaded_file($file_tmp,DISH_NAME.$new_name);
    //  ......Fetch Employee........
    $sql="SELECT * FROM `employee`
    INNER JOIN `userapplication` ON employee.applicationid=userapplication.visterId
    INNER JOIN `visters` ON visters.id=userapplication.visterId";
    
    $result=mysqli_query($con,$sql) or die("Employee sql query failed".mysqli_error($con));
    
    if(mysqli_num_rows($result)>0)
    {
        $ouput=mysqli_fetch_all($result,MYSQLI_ASSOC);
        echo json_encode(array('message' => 'Employee succesfully Add.', 'status' => true,'employeeinfo'=>$ouput));
    }
    // ...close employee info....
     }else{
      echo json_encode(array('message' => 'Employee not add.', 'status' => false));
     }
   }
  }}
?>