<?php
error_reporting(0);
include('../Includes/Config.php');
header('Content-Type:application/json,charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers: *');
   $user=json_decode(file_get_contents('php://input'),true);
    $token=md5(rand());
     $email=$user['email'];
     $password=$user['password'];
    
    if(!empty($email) && !empty($password))
    {
         $checkuseremail="SELECT email FROM visters WHERE email='$email' && password='$password'";
        $validate=mysqli_query($con,$checkuseremail) or die("User exist query failed".mysqli_error($con));
        if(mysqli_num_rows($validate)>0)
        {  
            $query=mysqli_query($con,"SELECT id,role FROM visters") or die("Role query".mysqli_error($con));
             $result=mysqli_fetch_assoc($query);
            $status=$result['role'];
            $id=$result['id'];
         echo json_encode(array('message' => 'user login successfully.', 'status' => true,'token'=>$status,'id'=>$id));
        }
        else
        {
            echo json_encode(array('message' => 'Please enter correct email && password.', 'status' => false)); 
        }
    }
?>