<html>
<body>

<?php
  $loc = array("Starbucks", "Panera", "Curia", "Volta", "Maudes");
?>

<h2><?php echo $loc[mt_rand(0, 5)]; ?></h2><br>
<ul>
  <li>Sanitation: <?php echo (mt_rand(0,10)/2); ?></li>
  <li>Toiletries: <?php echo (mt_rand(0,10)/2); ?></li>
  <li>Overall: <?php echo (mt_rand(0,10)/2); ?></li>
</ul>

</body>
</html>
