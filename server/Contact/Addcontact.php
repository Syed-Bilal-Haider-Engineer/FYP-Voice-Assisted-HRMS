<?php
error_reporting(0);
include('../Includes/Config.php');
header('Content-Type:application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers: *');
   $contact=json_decode(file_get_contents('php://input'),true);
   $subject=$contact['subject'];
   $msg=$contact['msg'];
   $email=$contact['email'];
   $name=$contact['name'];
   $date=date("Y/m/d");
//  echo $subject.":".$email;
//    die();
if(!empty($name))
{
$sql = "INSERT INTO `contact`(`subject`, `msg`, `username`, `email`,`date`)
 VALUES ('{$subject}','{$msg}','{$name}','{$email}','{$date}')";
$res=mysqli_query($con,$sql) or die("contact Query failed".mysqli_error($con));
if($res){
	$result=mysqli_query($con,"SELECT * FROM `contact`") or die("contact sql query failed");
if(mysqli_num_rows($result)>0)
{
    $ouput=mysqli_fetch_all($result,MYSQLI_ASSOC);
    echo json_encode(array('message'=>'send your message successfully','status'=>true,'contactus'=>$ouput));
}
else{
     echo json_encode(array('message'=>'No Record found','status'=>false));
}

}else{

 echo json_encode(array('message' => 'send your message successfully but not return', 'status' => false));

}
}
else{
   
   echo json_encode(array('message' => 'All variables is empty.', 'status' => false));
}

   ?>
