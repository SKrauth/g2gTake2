<?php 
    require_once 'connect.php';
    if(isset($_GET['rating'])){
        $rating = $_GET['rating'];
        $status = "0";
        $created = time();
 
        $query="INSERT INTO ratings (name,sanitation,toiletries,overall,gender,address,description,created_at)  
                VALUES ('$rating->name', '$rating->sanitation', '$rating->toiletries', '$rating->overall', '$rating->gender', '$rating->address', '$rating->description', '$created')";
        $result = $mysqli->query($query) or die($mysqli->error.__LINE__);
 
        $result = $mysqli->affected_rows;
 
        echo $json_response = json_encode($result);
    }
?>