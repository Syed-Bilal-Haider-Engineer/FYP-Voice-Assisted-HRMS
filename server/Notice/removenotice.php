<?php
error_reporting(0);
include('../Includes/Config.php');
header('Content-Type:application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers: *');
$notice=json_decode(file_get_contents('php://input'),true);
$id=$notice['id'];

// .........clients delete..............
 if(!empty($id))
 {
    $visterremove= "DELETE FROM `noticeboard` WHERE id='{$id}'";
     $visterremove=mysqli_query($con,$visterremove) or die("noticeboard remove Query".mysqli_error($con));
     if($visterremove)
     {
        $sql="SELECT * FROM noticeboard ";
        $result=mysqli_query($con,$sql) or die("Noticeboard sql query failed");
        if(mysqli_num_rows($result)>0)
        {
            $ouput=mysqli_fetch_all($result,MYSQLI_ASSOC);
            echo json_encode(array('message'=>'Delete noticeboard successfully','status'=>true,'notice'=>$ouput));
        }
        else{
             echo json_encode(array('message'=>'No Record found','status'=>false));
        }


       
     } 
     else{
         echo json_encode(array('message'=>'clients not noticeboard ','status'=>false));
     }
}

 
?>
