<?php
error_reporting(0);
include('../Includes/Config.php');
header('Content-Type:application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers: *');
   $employee=json_decode(file_get_contents('php://input'),true);
   $empID=$employee['userID'];
   $leavetype=$employee['employee'];
   $starting_at=$employee['starting_at'];
   $ends_on=$employee['ends_on'];
   $reason=$employee['reason'];
   $status="pending";
    
$days=round(abs(strtotime($starting_at) - strtotime($ends_on))/86400)+1;

if(!empty($employee) && !empty($leavetype) && !empty($starting_at) && !empty($ends_on))
{
$sql = "INSERT INTO leaves(Employee_type, EmployeeID, Starting_At, Ending_On, `Days`, Reason,`status`)
 VALUES ('{$leavetype}','{$empID}','{$starting_at}','{$ends_on}','{$days}','{$reason}','{$status}')";
$res=mysqli_query($con,$sql) or die("Employee leave request Query failed".mysqli_error($con));
if($res){

   // ..Fetch leaves..
   $sql="SELECT *  FROM `leaves`";
   $result=mysqli_query($con,$sql) or die("Employee leave sql query failed".mysqli_error($con));
   if(mysqli_num_rows($result)>0)
   {
       $ouput=mysqli_fetch_all($result,MYSQLI_ASSOC);
       echo json_encode(array('message' => 'Employee leave request save.', 'status' => true,'leavedetails'=>$ouput,"sendemail"=>true));
    }
	// ...End leave...

}else{

 echo json_encode(array('message' => 'Employee try again', 'status' => false));

}
}
else{
   
  echo json_encode(array('message' => 'All variables is empty.', 'status' => false));
}

   ?>
