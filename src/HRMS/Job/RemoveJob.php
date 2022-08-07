<?php
error_reporting(0);
include('../Includes/Config.php');
header('Content-Type:application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers: *');
$job=json_decode(file_get_contents('php://input'),true);

$id=$job['id'];
// ................Remove Jobs from Folder..........................
if(!empty($id))
{
   $sql1 = "SELECT * FROM jobs WHERE job_id = '{$id}'";
   $result = mysqli_query($con, $sql1) or die("Query Failed Job : Select".mysqli_error($con));
   if($result)
   {
       $row = mysqli_fetch_assoc($result);
       unlink("upload/".$row['logo']);
   }
   $jobremove = "DELETE FROM jobs WHERE job_id = '{$id}'";
if(mysqli_query($con,$jobremove))
{

//    Fetch job after the deletion of job
        $result=mysqli_query($con,"SELECT * FROM `jobs`") or die("User sql query failed");
        $sql="SELECT jobs.job_id,jobs.title,jobs.company_name,jobs.description,jobs.category,jobs.no_of_positons,jobs.job_city,
        jobs.posting_date,jobs.last_date,jobs.status,jobs.user_id,jobs.logo,jobs.skills,categories.Catid,categories.catname
        FROM `jobs`
        INNER JOIN `categories` ON jobs.category=categories.Catid ";
        $result=mysqli_query($con,$sql) or die("Jobs Query failed".mysqli_error($con));
        if(mysqli_num_rows($result)>0)
        {
            $ouput=mysqli_fetch_all($result,MYSQLI_ASSOC);
            echo json_encode(array('message'=>'Delete job successfully','status'=>true,'Jobdetails'=>$ouput));
        }
        // ....End job fetch code....
        }
else {
    echo json_encode(array('message'=>'Job not uccessfully','status'=>false));
}
}


?>