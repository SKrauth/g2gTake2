<?php 
    require_once 'connect.php';
    $nextID = $_GET['nextID'];
    $query="select ID, NAME, TOILETRIES, SANITATION, OVERALL, GENDER, ADDRESS, DESCRIPTION, CREATED_AT from ratings where ID='$nextID' order by name,id desc";
    $result = mysqli_query($connection, $query);

    $arr = array();
	while($row = mysqli_fetch_assoc($result)) {
		$arr[] = $row;	
	}
    
    # JSON-encode the response
    echo $json_response = json_encode($arr);
?>