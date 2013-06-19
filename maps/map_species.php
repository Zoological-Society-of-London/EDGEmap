<?php 

require($_SERVER["DOCUMENT_ROOT"] . "/common/database_functions.php");

// Open database connection for use throughout the page generation process
$con = database_connect();

$get_country == "China";

?>

var species =

[

<?php

$query = "SELECT * FROM SPECIES WHERE Type = 'EDGE' ORDER BY EDGE_rank + 0 ASC";

$queryresult = mysql_query($query);
if (!$queryresult) die ("Database access failed: " . mysql_error());
$result = mysql_num_rows($queryresult);

for ($j = 0 ; $j < $result ; ++$j)

{

	$result = mysql_fetch_row($queryresult);

$style = $j;

?>


<?php $get_species_id = $result[0]; ?>

<?php
	  
	$subquery = "SELECT * FROM SPECIES_IMAGE WHERE Type = 'Summary' AND Species_ID = '$get_species_id'";	
	$subresult = mysql_query($subquery);
	if (!$subresult) die ("Database access failed: " . mysql_error());
	
	$subrow = mysql_fetch_row($subresult);
	
?>

{ 

"edge_species_id" : "<?php echo "$result[0]"; ?>",

"species_image" : "<?php $cleaned_url = str_replace(array("maps", "pics", "maps"), 'pics', $subrow[3]);?><?php echo $cleaned_url; ?>",

"test_echo" : "<?php echo "$subrow[0]"; ?>",

"scientific_name":"<?php echo "$result[10]"; ?>",

"edge_group": "<?php echo "$result[4]"; ?>",

"edge_rank": "<?php echo "$result[6]"; ?>",

"species_order": "<?php echo "$result[8]"; ?>",

"species_family": "<?php echo "$result[9]"; ?>",

"countries": "<?php $cleaned_result = str_replace(array("\r\n", "\n", "\r"), '', $result[22]);?><?php echo $cleaned_result; ?>",

"common_names": "<?php $cleaned_name = str_replace(array("\r\n", "\n", "\r", "\"", "/'"), '', $result[12]);?><?php echo $cleaned_name; ?>",},

<?php 
} ?>

]