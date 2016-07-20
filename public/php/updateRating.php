<?php
    require_once 'connect.php';
    if(isset($_GET['ratingID'])){
        //this pile of nonsense came about because I was having trouble getting angular to pass objects or arrays correctly, so I had to hard code each variable. It's aweful, hopefully there will be a better solution soon.
        $ratingID = $_GET['ratingID'];
        $name = $_GET['name'];
        $sanitation = $_GET['sanitation'];
        $toiletries = $_GET['toiletries'];
        $overall = $_GET['overall'];
        $gender = $_GET['gender'];
        $address = $_GET['address'];
        $description = $_GET['description'];

        $query="UPDATE ratings set name='$name', sanitation='$sanitation', toiletries='$toiletries', overall='$overall',
            gender='$gender', address='$address', description='$description' where id='$ratingID'";

        $result = $connection->query($query) or die($connection->error.__LINE__);

        $result = $connection->affected_rows;

        $json_response = json_encode($result);
    };
?>
