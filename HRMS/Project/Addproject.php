<?php
error_reporting(0);
include('../Includes/Config.php');
header('Content-Type:application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers: *');
define('DISH_NAME',$_SERVER['DOCUMENT_ROOT']."/HRMS/Uploads/");
$pro_name=$_POST['pro_name'];
$client=$_POST['client'];
$teammem=$_POST['teammem'];
$start_date=$_POST['start_date'];
$end_date=$_POST['end_date'];
$leader=$_POST['leader'];
$department=$_POST['department'];
$description=$_POST['description'];
$status="Working";
if(!empty($pro_name) && !empty($client) && !empty($leader) && !empty($department) && !empty($description))
{
if(isset($_FILES['img'])){
    $file_name = $_FILES['img']['name'];
    $file_size = $_FILES['img']['size'];
    $file_tmp = $_FILES['img']['tmp_name'];
    $file_type = $_FILES['img']['type'];
    $file_ext = end(explode('.',$file_name));
   $error=true;
    $extensions = array("jpeg","jpg","png","pdf");
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
      $sql = "INSERT INTO `project`( `project_name`, `client`, `team_mem`, `start_date`, `end_date`, `leader`, `department`, `description`, `File`, `status`)
      VALUES ('{$pro_name}','{$client}','{$teammem}','{$start_date}','{$end_date}','{$leader}','{$department}','{$description}','{$new_name}','{$status}')";
     $res=mysqli_query($con,$sql) or die("Project Query failed".mysqli_error($con));
     if($res){
        move_uploaded_file($file_tmp,DISH_NAME.$new_name);
        $result=mysqli_query($con,"SELECT * FROM `project` ") or die("project sql query failed");
        if(mysqli_num_rows($result)>0)
        {
            $ouput=mysqli_fetch_all($result,MYSQLI_ASSOC);
            echo json_encode(array('message'=>'project save  successfully','status'=>true,'projectdetails'=>$ouput));
        }
        else{
             echo json_encode(array('message'=>'No Record found','status'=>false));
        }
     }else{
      echo "Project not save.";
     }
   }
  }}
?>