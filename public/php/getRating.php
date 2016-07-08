<?php 
    require_once 'connect.php';
    $status = '%';
    if(isset($_GET['status'])){
        $status = $_GET['status'];
    }
    $query="select ID, NAME, OVERALL from ratings order by name,id desc";
    $result = mysqli_query($connection, $query);

    $arr = array();
	while($row = mysqli_fetch_assoc($result)) {
		$arr[] = $row;	
	}
    
    # JSON-encode the response
    echo $json_response = json_encode($arr);
    // echo "testing";
?>