<?php
error_reporting(0);
include('../Includes/Config.php');
header('Content-Type:application/json,charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers: *');
   $user=json_decode(file_get_contents('php://input'),true);
  $fname=$user['fname'];
  $lname=$user['lname'];
  $username=$user['username'];
  $email=$user['email'];
  $phone=$user['phone'];
  $password=$user['password'];
  $address=$user['address'];
  $role=0;
  if(!empty($fname) && !empty($lname) && !empty( $username) && !empty( $email) && !empty( $phone) && !empty($password))
  {
    // ..................email check query............
    $checkuseremail="SELECT email FROM visters WHERE email='$email'";
   $validate=mysqli_query($con,$checkuseremail) or die("User exist query failed".mysqli_error($con));
   if(mysqli_num_rows($validate)>0)
   {
    echo json_encode(array('message' => 'Users already exist.', 'status' => false));

    die();
   }
    // ..............visters Insert Query...............
    $sql = "INSERT INTO visters(fname, lname, username, email,phone, `password`, `address`,`status`)
     VALUES ('{$fname}','{$lname}','{$username}','{$email}','{$phone}','{$password}','{$address}','{$role}')";
    $res=mysqli_query($con,$sql) or die("Users Query failed".mysqli_error($con));
    if($res){
      echo json_encode(array('message' => 'Users Signup successfully.', 'status' => true));
    
    }else{
    
     echo json_encode(array('message' => 'Users not save.', 'status' => false));
    
    }
    }
    else{
       
      echo  json_encode(array('message' => 'All variables is empty.', 'status' => false));
    }

?>
