<?php
error_reporting(0);
include('../Includes/Config.php');
header('Content-Type:application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers: *');
define('DISH_NAME',$_SERVER['DOCUMENT_ROOT']."/HRMS/Uploads/");
$title=$_POST['title'];
$enddate=$_POST['enddate'];
$city=$_POST['city'];
$status=$_POST['status'];
$category=$_POST['category'];
$notice=$_POST['Notice'];
$jobskills=$_POST['skills'];
$nopos=$_POST['position'];
$currentDateTime = date('Y-m-d');
$author=1;
if(!empty($title) && !empty($enddate) && !empty($city) && !empty($category) && !empty($notice))
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
      $sql = "INSERT INTO jobs(title,description, category, no_of_positons,job_city, posting_date, last_date,status,user_id,logo,skills)
      VALUES ('{$title}','{$notice}','{$category}','{$nopos}','{$city}','{$currentDateTime}','{$enddate}','{$status}','{$author}','{$new_name}','{$jobskills}')";
     $res=mysqli_query($con,$sql) or die("Post Query failed".mysqli_error($con));
     if($res){
        move_uploaded_file($file_tmp,DISH_NAME.$new_name);
        echo "Job save succesfully";
     }else{
      echo "Job not save.";
     }
   }
  }}
?>