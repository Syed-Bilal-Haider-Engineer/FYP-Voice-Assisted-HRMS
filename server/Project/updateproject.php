<?php
error_reporting(0);
include_once('../Includes/Config.php');
header('Content-Type:application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS');
define('DISH_NAME',$_SERVER['DOCUMENT_ROOT']."/HRMS/Uploads/");
$prodescripton=$_POST['prodesc'];
$projectname=$_POST['proname'];
$teamleader=$_POST['teamleader'];
$teammem=$_POST['teammem'];
$role=$_POST['role'];
$deadline=$_POST['deadline'];
$id=$_POST['id'];
if(!empty($employee) || !empty($teammem))
{
     $sql=" UPDATE `project` SET `project_name`='{$projectname}',
       `team_mem`='{$teammem}',`end_date`='{$deadline}',`leader`='{$teamleader}',`description`='{$prodescripton}' WHERE project_id='{$id}'";
      $res= mysqli_query($con,$sql) or die("Project update Post Query failed".mysqli_error($con));
      if($res){
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
        echo json_encode(array('message'=>'project not update ','status'=>false));
      }
    }
    else{
      echo json_encode(array('message'=>'All variable required ','status'=>false));
    }
  // Job update without File

?>