<?php
    $conn = mysqli_connect("localhost","root","","protfolio");
    if(!$conn){
        echo "Fail to connect database";
    }
    $fname = $_POST['fname'];
    $mname = $_POST['mname'];
    $lname = $_POST['lname'];
    $email = $_POST['email'];
    $con = $_POST['con'];
    $sub = $_POST['sub'];
    $msg = $_POST['msg'];

    if(!empty($fname) && !empty($mname) && !empty($lname)){
        //echo "tema name not empty.";
        if(!empty($email) && !empty($sub) && !empty($msg)){
            //echo "all data are get.";
            $tid = time();

            $sql = "INSERT INTO messages (mid, fname, mname, lname, contuct, email, sub, msg) VALUES ('{$tid}', '{$fname}', '{$mname}', '{$lname}', '{$con}', '{$email}', '{$sub}', '{$msg}')";
            if(mysqli_query($conn,$sql)){
                echo "<br>data insert success.<br>";
            }else{
                echo "Fail to insert tema data.";
            }
        }else{
            echo "Contestent information required.";
        }
    }else{
        echo "Name Required.";
    }
?>