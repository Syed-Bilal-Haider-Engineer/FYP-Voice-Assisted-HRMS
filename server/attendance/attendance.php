<?php
error_reporting(0);
include('../Includes/Config.php');
header('Content-Type:application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers: *');
   $attendance=json_decode(file_get_contents('php://input'),true);
   date_default_timezone_set("Asia/Karachi");
   $id=$attendance['values'];
   $macaddress=$attendance['macaddress'];
 $checkout="0:0";
 $workinghour="0:0";
 $status="0";
 $intime= date("h:i:s");
 $today = date("Y-m-d"); 
 $result=mysqli_query($con,"SELECT * FROM `attendance` WHERE usermcaddress='{$macaddress}' && curdate='{$today}'") or die("attendance sql query failed");
 $row=mysqli_num_rows($sql);
 if($row>0)
{
    echo json_encode(array('message' => 'Attendance not marks, because today already marks ', 'status' => false));
    die();
}
 else {
    if(!empty($id))
 {
    $sql = mysqli_query($con,"INSERT into attendance(`EmployeeID`, `checkin`, `checkout`, `curdate`, `workinghour`, `status`,`usermcaddress`)
    VALUES('{$id}','{$intime}','{$checkout}', CURRENT_DATE(),'{$workinghour}','{$status}','{$macaddress}')" ) or die("Query attendance failed".mysqli_error($con));
   if($sql)
   {

      $result=mysqli_query($con,"SELECT * FROM `attendance`") or die("attendance sql query failed");
      if(mysqli_num_rows($result)>0)
      {
          $ouput=mysqli_fetch_all($result,MYSQLI_ASSOC);
        
          echo json_encode(array('message' => 'Track time start ', 'status' => true,'attedance'=>$ouput));
      }
      else{
           echo json_encode(array('message'=>'No Record found','status'=>false));
      }
   }
   else{
    echo json_encode(array('message' => 'Track time start ', 'status' => false));
   
   }
 }
   
 }

   ?>