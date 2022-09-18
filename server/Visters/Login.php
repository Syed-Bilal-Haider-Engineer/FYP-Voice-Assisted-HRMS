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
        //...........normal user query.........
         $checkuseremail="SELECT id,email,`status` FROM visters WHERE email='$email' && password='$password'";
        $validate=mysqli_query($con,$checkuseremail) or die("User exist query failed".mysqli_error($con));
        if(mysqli_num_rows($validate)>0)
        {  
             $result=mysqli_fetch_assoc($validate);
            $status=$result['status'];
            $id=$result['id'];
         echo json_encode(array('message' => 'user login successfully.', 'status' => true,'token'=>$status,'id'=>$id));
         die();
        }
        else {
            // ................Employee and Admin Query..............
            $checkuseremail="SELECT EmployeeID,email,`role` FROM employee WHERE email='$email' && password='$password'";
            $validate=mysqli_query($con,$checkuseremail) or die("Employee login query failed".mysqli_error($con));
            if(mysqli_num_rows($validate)>0)
        {  
             $result=mysqli_fetch_assoc($validate);
            $status=$result['role'];
            $id=$result['EmployeeID'];
            $email=$result['email'];
         echo json_encode(array('message' => 'Employee login successfully.', 'status' => true,'token'=>$status,'id'=>$id,'email'=>$email));
        }
        // ....................End eomplyee login informations......................
        else
        {
            echo json_encode(array('message' => 'Please enter correct email && password.', 'status' => false)); 
        }
        }
       
    }
?>