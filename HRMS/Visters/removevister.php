<?php
error_reporting(0);
include('../Includes/Config.php');
header('Content-Type:application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:POST');
header('Access-Control-Allow-Headers: *');
$vister=json_decode(file_get_contents('php://input'),true);
$id=$vister['id'];

// .........Category delete..............
 if(!empty($id))
 {
    $visterremove= "DELETE FROM `visters` WHERE id='{$id}'";
     $visterremove=mysqli_query($con,$visterremove) or die("vister remove Query".mysqli_error($con));
     if($visterremove)
     {
        $result=mysqli_query($con,"SELECT * FROM `visters`") or die("User sql query failed");
        if(mysqli_num_rows($result)>0)
        {
            $ouput=mysqli_fetch_all($result,MYSQLI_ASSOC);
            echo json_encode(array('message'=>'Delete vister successfully','status'=>true,'visterdetails'=>$ouput));
        }
     } 
     else{
         echo json_encode(array('message'=>'Vister not Delete ','status'=>false));
     }
    //  ............Delete Jobs............
   
}

 
?>
