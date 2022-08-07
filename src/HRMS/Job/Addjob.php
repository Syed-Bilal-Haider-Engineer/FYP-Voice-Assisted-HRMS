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
$company=$_POST['company'];
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
 echo json_encode(array('message' => 'This extension file not allowed, Please choose a JPG or PNG file.', 'status' => false));
 $error=false;
    }
    if($file_size > 2097152){
     
      echo json_encode(array('message' => 'File size must be 2mb or lower..', 'status' => false));
      $error=false;
    }
   if($error==true)
   {
    $new_name = time(). "-".basename($file_name);
      $sql = "INSERT INTO jobs(title,description, category, no_of_positons,job_city, posting_date, last_date,status,user_id,logo,skills,company_name)
      VALUES ('{$title}','{$notice}','{$category}','{$nopos}','{$city}','{$currentDateTime}','{$enddate}','{$status}','{$author}','{$new_name}','{$jobskills}','{$company}')";
     $res=mysqli_query($con,$sql) or die("Post Query failed".mysqli_error($con));
     if($res){
        move_uploaded_file($file_tmp,DISH_NAME.$new_name);
      // ......Fetch Jobs......
      $sql="SELECT jobs.job_id,jobs.title,jobs.company_name,jobs.description,jobs.category,jobs.no_of_positons,jobs.job_city,
      jobs.posting_date,jobs.last_date,jobs.status,jobs.user_id,jobs.logo,jobs.skills,categories.Catid,categories.catname
      FROM `jobs`
      INNER JOIN `categories` ON jobs.category=categories.Catid ";
      $result=mysqli_query($con,$sql) or die("Jobs Query failed".mysqli_error($con));
      if(mysqli_num_rows($result)>0)
      {
          $ouput=mysqli_fetch_all($result,MYSQLI_ASSOC);
          echo json_encode(array('message'=>' job save successfully','status'=>true,'Jobdetails'=>$ouput));
      }
// .........End fetch Jobs.......
     }else{
      echo json_encode(array('message' => 'Job not save succesfully', 'status' => false));
     }
   }
  }}
  else {
    echo json_encode(array('message' => 'All variable is required', 'status' => false));
  }
?>