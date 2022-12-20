<?php
    $myemail = $_POST['email'];
    $myphone = $_POST['phone'];
    $mycity = $_POST['gorod'];
    $servername = "localhost";
    $username = "root";
    $password = "password";
    
    // Create connection
    $conn = new mysqli($servername, $username, '', 'test');
    
    // Check connection
    if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
    }
    $sql = "INSERT INTO table_front2(Email, PhoneNumber, City)
    VALUES ('$myemail', '$myphone', '$mycity')";

    if ($conn->query($sql) === TRUE) {
        header('Location: Shoqan.php');
        exit;
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
?>