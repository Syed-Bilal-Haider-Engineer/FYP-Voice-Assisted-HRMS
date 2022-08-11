<?php
error_reporting(0);
include('../Includes/Config.php');
header('Content-Type:application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers: *');
$tasks=json_decode(file_get_contents('php://input'),true);
$id=$tasks['projectid'];
$taskdescription=$tasks['teskdes'];
// echo $id.":".$taskdescription;
// die();
 if(!empty($id))
 {
    $tasksupdate= "UPDATE `tasks` SET `pro_id`='{$id}',`task_desc`='{$taskdescription}'WHERE task_id='{$id}'";
     $tasksupdatequery=mysqli_query($con,$tasksupdate) or die("tasks update Query failed".mysqli_error($con));
     if($tasksupdatequery)
     {
   // ...Tasks fetch query...
   $result=mysqli_query($con,"SELECT * FROM `tasks`") or die("tasks sql query failed");
       $ouput=mysqli_fetch_all($result,MYSQLI_ASSOC);
       echo json_encode(array('message' => 'update tasks successfully', 'status' => true,'tasks'=>$ouput));
   
// .......End query.....
       
     } 
     else{
         echo json_encode(array('message'=>'tasks not update ','status'=>false));
     }
    //  ............Delete Jobs............
   
}
?>