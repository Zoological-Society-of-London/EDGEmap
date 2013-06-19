<html xmlns="http://www.w3.org/1999/xhtml"><!-- InstanceBegin template="/Templates/stdpage_v3_edge_menu.dwt.php" codeOutsideHTMLIsLocked="false" -->
<head>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<link rel="stylesheet" type="text/css" href="/edgered.css" />
<link rel="stylesheet" type="text/css" href="/fonts.css" />
<link rel="stylesheet" type="text/css" href="/boxes.css" />
<link rel="stylesheet" type="text/css" href="/gmap.css" />

<title>EDGE of Existence :: EDGE Conservation</title>

<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.5.1/leaflet.css" />
<!--[if lte IE 8]>
    <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.5.1/leaflet.ie.css" />
<![endif]-->
<script src="http://cdn.leafletjs.com/leaflet-0.5.1/leaflet.js"></script>
<link rel="stylesheet" href="maps/map_style.css" />

</head>



<body onload="if(typeof initPage=='function') initPage();" class="edgered">



<div id="container">



<?php require($_SERVER['DOCUMENT_ROOT'] . "/header.html"); ?>



<div id="pagetitle">



<!-- InstanceBeginEditable name="PageTitle" -->



<?php require("species_page_title.php"); ?>



<!-- InstanceEndEditable -->



</div>





<div id="mainContent"> 

 



<div class="MainCol Map">

<div id="title_halfpage">

<h2>EDGE Map</h2>

</div>


<div style="padding-right:40px;">

<p><strong>Click on a country to find out which EDGE mammals, amphibians and corals occur there or use the search below the map.</strong></p>

<p><a class="red" href="https://www.zsl.org/conservation/news/worlds-most-extraordinary-species-mapped-for-the-first-time,1080,NS.html">Read more about the map: "World's most extraordinary species mapped for the first time" <small>(Zoological Society of London website)</small></a></p>

<p><a class="red" href="/about/edge_science.php">More information on how EDGE species are identified.</a></p>

<p>Hover over the EDGE Zones buttons to see regions of the world containing the highest concentrations of EDGE mammals and amphibians.</p>

<p>Notice that EDGE Zones for mammals and amphibians are different, reflecting the varied evolutionary histories and threats facing the two groups.</p>

<p>By supporting large-scale conservation projects and capacity building in regions of high biodiversity value, such as EDGE Zones, we can achieve greater conservation outcomes.</p>

<p><a class="red" href="http://www.edgeofexistence.org/conservation/default.php">Learn more about our conservation work.</a></p>

<br />
<p><b>Please note that you will need a modern web browser to view the interactive map. Check which browser you are using and whether you can upgrade it at <a class="red" href="http://whatbrowser.org/">whatbrowser.org</a>.</b></p> 

</div>

<div class="map_guide_wrapper">
	<div id="guide_country">Select a country to search for EDGE species</div>
	<div id="guide_zone"><button id="mam_zone_btn">Show Mammal EDGE Zones</button><button id="amp_zone_btn">Show Amphibian EDGE Zones</button><div id="species_richness_scale"></div></div>
</div>

<div id="edge_map"></div>

<script src="maps/countries.js"></script>
<script src="maps/zones.js"></script>
<script src="maps/map_species.php"></script>
<script src="maps/map.js"></script>
<script src="maps/edge_zones_mammals.js"></script>
<script src="maps/edge_zones_amphibians.js"></script>

<div class="map_guide_wrapper_footer">

<div id="guide_selection">Search for a specific species or country. Returned countries are displayed in blue. A "?" depicts that the species may be found there</div>

	<select id="countries">
	<option>Country</option>
	</select>

	<input id="searchfield" placeholder="Search by common name"/><button id="search">Search</button>
	<div id="searchresult"></div>

</div>



</div> 

<!-- InstanceEndEditable -->
  

</div>

  

<!-- This clearing element should immediately follow the #mainContent div in order to force the #container div to contain all child floats -->



<br class="clearfloat" />



<?php require($_SERVER['DOCUMENT_ROOT'] . "/footer.html"); ?>



<!-- End mainContent and close down page -->



</div>



</body>



<!-- InstanceEnd --></html>

