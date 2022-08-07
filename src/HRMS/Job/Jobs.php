<?php
include_once('../Includes/Config.php');
header('Content-Type:application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS');

$sql="SELECT jobs.job_id,jobs.title,jobs.company_name,jobs.description,jobs.category,jobs.no_of_positons,jobs.job_city,
jobs.posting_date,jobs.last_date,jobs.status,jobs.user_id,jobs.logo,jobs.skills,categories.Catid,categories.catname
FROM `jobs`
INNER JOIN `categories` ON jobs.category=categories.Catid ";
$result=mysqli_query($con,$sql) or die("Jobs Query failed".mysqli_error($con));
if(mysqli_num_rows($result)>0)
{
    $ouput=mysqli_fetch_all($result,MYSQLI_ASSOC);
    $result=json_encode($ouput);
    echo $result;
}
else{
     echo json_encode(array('message'=>'No Record found','status'=>false));
}

?>