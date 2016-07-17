<?php 
    require_once 'connect.php';
    $ratingID = $_GET['ratingID'];
    $query="delete from ratings where ID='$ratingID'";
    $result = mysqli_query($connection, $query);

    
    # JSON-encode the response
    echo $json_response = json_encode($arr);
?>