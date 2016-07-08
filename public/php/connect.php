<?php
    $host = "127.0.0.1";
    $user = "rthawk990";
    $pass = "";
    $db = "sample_db";
    $port = 3306;
    
    $connection = mysqli_connect($host, $user, $pass, $db, $port)or die(mysql_error());

    //And now to perform a simple query to make sure it's working
    $query = "SELECT * FROM ratings";
    $result = mysqli_query($connection, $query);

    while ($row = mysqli_fetch_assoc($result)) {
        echo $row['name'] . " has an overall rating of: " . $row['overall']/2 . "\r\n";
    }
    
?>