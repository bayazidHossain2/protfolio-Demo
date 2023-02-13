<?php
    $conn = mysqli_connect("localhost","root","","protfolio");
    if(!$conn){
        echo "Fail to connect database";
    }
    $name = $_POST['name'];
    $email = $_POST['email'];
    $sub = $_POST['sub'];
    $msg = $_POST['msg'];

    if(!empty($name)){
        //echo "tema name not empty.";
        if(!empty($email) && !empty($sub) && !empty($msg)){
            //echo "all data are get.";
            $tid = time();

            $sql = "INSERT INTO messages (mid, name, email, sub, msg) VALUES ('{$tid}', '{$name}', '{$email}', '{$sub}', '{$msg}')";
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