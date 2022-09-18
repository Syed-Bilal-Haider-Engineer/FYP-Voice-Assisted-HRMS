<?php
error_reporting(0);
include('../Includes/Config.php');
header('Content-Type:application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers: *');
$setting=json_decode(file_get_contents('php://input'),true);
$cname=$setting['cname'];
$contactper=$setting['contactper'];
$addressvalue=$setting['addressvalue'];
$emailvalue=$setting['emailvalue'];
$phone=$setting['phone'];
$websiteurl=$setting['websiteurl'];
$mobile=$setting['mobile'];
// .........setting delete..............
if(!empty($cname))
{
   $settingupdate= "UPDATE `setting` SET `cname`='{$cname}',`conperson`='{$contactper}',`adddress`='{$addressvalue}',
   `email`='{$emailvalue}',`phonenum`='{$phone}',`mobilenum`='{$mobile}',`websiteurl`='{$websiteurl}' WHERE `id`=1";
    $settingupdate=mysqli_query($con,$settingupdate) or die("setting update Query".mysqli_error($con));
    if($settingupdate)
    {
  // ...setting fetch query...
  $result=mysqli_query($con,"SELECT * FROM `setting`") or die("setting sql query failed");
      $ouput=mysqli_fetch_all($result,MYSQLI_ASSOC);
      echo json_encode(array('message' => 'update setting successfully', 'status' => true,'setting'=>$ouput));
  
// .......End query.....
      
    } 
    else{
        echo json_encode(array('message'=>'setting not update ','status'=>false));
    }
   //  ............Delete Jobs............
  
}
?>