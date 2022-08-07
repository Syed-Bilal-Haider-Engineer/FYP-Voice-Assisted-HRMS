<?php
error_reporting(0);
include('../Includes/Config.php');
header('Content-Type:application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: *');
$category=json_decode(file_get_contents('php://input'),true);
$id=$category['id'];
// .......................Remove image from folder................
if(!empty($id))
{
   $sql1 = "SELECT * FROM jobs WHERE category = '{$id}'";
   $result = mysqli_query($con, $sql1) or die("Query Failed : Select".mysqli_error($con));
   if($result)
   {
       $row = mysqli_fetch_assoc($result);
       unlink("upload/".$row['logo']);
   }
}

// .........Categor delete..............
 if(!empty($id))
 {
    $categorremove= "DELETE FROM categories WHERE Catid ='{$id}'";
     $removecat=mysqli_query($con,$categorremove) or die("Category Query".mysqli_error($con));
     if($removecat)
     {
        $jobremove = "DELETE FROM jobs WHERE category = '{$id}'";
        //.... delete job with category......
        if(mysqli_query($con,$jobremove))
        {
            $result=mysqli_query($con,"SELECT * FROM `categories`") or die("Category sql query failed");
                if(mysqli_num_rows($result)>0)
                {
                $ouput=mysqli_fetch_all($result,MYSQLI_ASSOC);
                echo json_encode(array('message'=>'Delete successfully','status'=>true,'Editecategory'=>$ouput));
                }
         exit();
        }
        //.....without delete job.....
        $result=mysqli_query($con,"SELECT * FROM `categories`") or die("User sql query failed");
        if(mysqli_num_rows($result)>0)
        {
            $ouput=mysqli_fetch_all($result,MYSQLI_ASSOC);
            echo json_encode(array('message'=>'Delete successfully','status'=>true,'Editecategory'=>$ouput));
        }
        
     } 
     else{
         echo json_encode(array('message'=>'category not Delete ','status'=>false));
     }
    //  ............Delete Jobs............
   
}

 
?>
