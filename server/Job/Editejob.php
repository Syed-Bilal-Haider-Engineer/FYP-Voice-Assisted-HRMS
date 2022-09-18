
<?php
error_reporting(0);
include('../Includes/Config.php');
header('Content-Type:application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers: *');
define('DISH_NAME',$_SERVER['DOCUMENT_ROOT']."/HRMS/Uploads/");
$id=$_POST['id'];
$title=$_POST['title'];
$city=$_POST['city'];
$notice=$_POST['Notice'];
$jobskills=$_POST['skills'];
$nopos=$_POST['position'];
$company=$_POST['company'];

if(!empty($id) && !empty($title))
{
    $sql1 = "SELECT * FROM jobs WHERE job_id = '{$id}'";
    $result = mysqli_query($con, $sql1) or die("Query Failed : Select".mysqli_error($con));
    if($result)
    {
        $row = mysqli_fetch_assoc($result);
    // ...update job...
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
        unlink("upload/".$row['logo']);
        $new_name = time(). "-".basename($file_name);
    // ...update sql job query..
     $sql="UPDATE `jobs` SET `title`='{$title}',`description`='{$notice}',`no_of_positons`='{$nopos}',`job_city`='{$city}',`logo`='{$new_name}',`skills`='{$jobskills}',`company_name`='{$company}' WHERE job_id='{$id}'";
       $res=mysqli_query($con,$sql) or die("Job update Post Query failed".mysqli_error($con));
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
        }else{
          echo json_encode(array('message'=>' job not update successfully','status'=>false));
        }
       }
    }
}

  // Job update without File
else {
  $sql="UPDATE `jobs` SET `title`='{$title}',`description`='{$notice}',`no_of_positons`='{$nopos}',`job_city`='{$city}',`skills`='{$jobskills}',`company_name`='{$company}' WHERE job_id='{$id}'";
  $res=mysqli_query($con,$sql) or die("Job update Post Query failed".mysqli_error($con));
  if($res){
   // ......Fetch Jobs......
   $sql="SELECT jobs.job_id,jobs.title,jobs.company_name,jobs.description,jobs.category,jobs.no_of_positons,jobs.job_city,
   jobs.posting_date,jobs.last_date,jobs.status,jobs.user_id,jobs.logo,jobs.skills,categories.Catid,categories.catname
   FROM `jobs`
   INNER JOIN `categories` ON jobs.category=categories.Catid ";
   $result=mysqli_query($con,$sql) or die("Jobs update with file Query failed".mysqli_error($con));
   if(mysqli_num_rows($result)>0)
   {
       $ouput=mysqli_fetch_all($result,MYSQLI_ASSOC);
       echo json_encode(array('message'=>' job save successfully','status'=>true,'Jobdetails'=>$ouput));
   }else{
     echo json_encode(array('message'=>' job not update successfully','status'=>false));
   }
  }
}

}
// .....end job update...

}
?>