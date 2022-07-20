<?php
error_reporting(0);
include('../Includes/Config.php');
header('Content-Type:application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers: *');
define('DISH_NAME',$_SERVER['DOCUMENT_ROOT']."/HRMS/Uploads/");
$designation=$_POST['designation'];
$degreeyear=$_POST['degreeyear'];
$totalexp=$_POST['totalexp'];
$cname=$_POST['companyname'];
$des=$_POST['description'];
$degree=$_POST['degree'];
$cgpa=$_POST['cgpa'];
$attend=$_POST['attend'];
$subject=$_POST['subject'];
$instituename=$_POST['instituename'];
$id=$_POST['id'];
if(!empty($designation) && !empty($degreeyear) && !empty($cname) && !empty($cgpa) && !empty($subject))
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

      $sql = "INSERT INTO userapplication(designation, 
      cname, description,attend, degree, instituename,totalexp,cgpa,degreeyear,subject,File,visterId)
      VALUES 
      ('{$designation}','{$cname}','{$des}','{$attend}','{$degree}','{$instituename}','{$totalexp}',
      '{$cgpa}','{$degreeyear}','{$subject}','{$new_name}','{$id}')";
     $res=mysqli_query($con,$sql) or die("User Applications Query failed".mysqli_error($con));
     if($res){
        move_uploaded_file($file_tmp,DISH_NAME.$new_name);
        echo "Apply save succesfully";
     }else{
      echo "Apply not save.";
     }
   }
  }}

   ?>
