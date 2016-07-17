<?php 
    require_once 'connect.php';
    if(isset($_GET['rating'])){
        //this pile of nonsense came about because I was having trouble getting angular to pass objects or arrays correctly, so I had to hard code each variable. It's aweful, hopefully there will be a better solution soon.
        $name = $_GET['name'];
        $sanitation = $_GET['sanitation'];
        $toiletries = $_GET['toiletries'];
        $overall = $_GET['overall'];
        $gender = $_GET['gender'];
        $address = $_GET['address'];
        $description = $_GET['description'];
        $created = time();
 
        $query="INSERT INTO ratings (name,sanitation,toiletries,overall,gender,address,description,created_at)  
                VALUES ('$name', '$sanitation', '$toiletries', '$overall', '$gender', '$address', '$description', '$created')";
        
        $result = $connection->query($query) or die($connection->error.__LINE__);
 
        $result = $connection->affected_rows;
 
        echo $json_response = json_encode($result);
    }
?>