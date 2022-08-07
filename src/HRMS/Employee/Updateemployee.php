<?php
error_reporting(0);
include_once('../Includes/Config.php');
header('Content-Type:application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS');
define('DISH_NAME',$_SERVER['DOCUMENT_ROOT']."/HRMS/Uploads/");
$username=$_POST['username'];
$fname=$_POST['fname'];
$lname=$_POST['lname'];
$visterid=$_POST['visterid'];
$empid=$_POST['employeeid'];
$role=$_POST['role'];
$phone=$_POST['phone'];

if(!empty($lname) && !empty($phone))
{
    $sql1 = "SELECT * FROM employee WHERE EmployeeID = '{$empid}'";
    $result = mysqli_query($con, $sql1) or die("Query Failed : Select".mysqli_error($con));
    if($result)
    {    $vistersql = "UPDATE visters SET fname='$fname', lname='$lname', username='$username', phone='$phone' WHERE id=$visterid";
        $visterresult=mysqli_query($con,$vistersql);
        if($vistersql)
        {
        $row = mysqli_fetch_assoc($result);
    // ...update job...
    if(isset($_FILES['img'])){
        $file_name = $_FILES['img']['name'];
        $file_size = $_FILES['img']['size'];
        $file_tmp = $_FILES['img']['tmp_name'];
        $file_type = $_FILES['img']['type'];
        $file_ext = end(explode('.',$file_name));
       $error=true;
        $extensions = array("jpeg","jpg","png");
        if(in_array($file_ext,$extensions) === false)
        {
     echo json_encode(array('message' => 'This extension file not allowed, Please choose a JPG or PNG file.', 'status' => false));
     $error=false;
        }
        if($file_size > 2097152){
         
          echo json_encode(array('message' => 'File size must be 2mb or lower..', 'status' => false));
          $error=false;
        }
       if($error==true)
       {
        unlink("upload/".$row['picture']);
        $new_name = time(). "-".basename($file_name);
    // ...update sql job query..
     $sql="UPDATE `employee` SET `role`='{$role}',`picture`='{$new_name}' WHERE EmployeeID = '{$empid}'";
       $res=mysqli_query($con,$sql) or die("Employee update Post Query failed".mysqli_error($con));
       if($res){
          move_uploaded_file($file_tmp,DISH_NAME.$new_name);
       
          $sql="SELECT *  FROM `employee`
INNER JOIN `userapplication` ON employee.applicationid=userapplication.id
INNER JOIN `visters` ON visters.id=userapplication.visterId ";

        $result=mysqli_query($con,$sql) or die("Employee Query failed".mysqli_error($con));
        if(mysqli_num_rows($result)>0)
        {
            $ouput=mysqli_fetch_all($result,MYSQLI_ASSOC);
            echo json_encode(array('message'=>' Employee save successfully','status'=>true,'employeeinfo'=>$ouput));
        }else{
          echo json_encode(array('message'=>' Employee not update successfully','status'=>false));
        }
       }
    }
}

  // Job update without File
else {
  $sql="UPDATE `employee` SET `role`='{$role}' WHERE EmployeeID = '{$empid}'";
  $res=mysqli_query($con,$sql) or die("Employee update Post Query failed".mysqli_error($con));
  if($res){
   // ......Fetch Jobs......
   $sql="SELECT *  FROM `employee`
   INNER JOIN `userapplication` ON employee.applicationid=userapplication.id
   INNER JOIN `visters` ON visters.id=userapplication.visterId ";

   $result=mysqli_query($con,$sql) or die("Employee update with file Query failed".mysqli_error($con));
   if(mysqli_num_rows($result)>0)
   {
       $ouput=mysqli_fetch_all($result,MYSQLI_ASSOC);
       echo json_encode(array('message'=>' Employee without file save successfully','status'=>true,'employeeinfo'=>$ouput));
   }else{
     echo json_encode(array('message'=>' Employee not update successfully','status'=>false));
   }
  }
}

}
}
// .....end job update...

}
?>