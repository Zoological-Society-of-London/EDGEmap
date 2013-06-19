

$(document).ready(function() {
	
// Create map

var map = L.map('edge_map').setView([0, 0], 1);

// Styles

var red = {
	"fillColor": "#bf3131",
    "color": "white",
    "weight": 1,
	"fillOpacity": 1
};

var orange = {
	"fillColor": "#ffde00",
    "color": "white",
    "weight": 1,
	"fillOpacity": 1
};

var blue = {
	"fillColor": "#18649e",
    "color": "white",
    "weight": 1,
	"fillOpacity": 1
};

var grey = {
	"fillColor": "#dedede",
    "color": "white",
    "weight": 1,
	"fillOpacity": 1
};

//EDGE Zones heatmap styles

var one = {
	"fillColor": "#ff1300",
    "color": "black",
    "weight": 0,
	"fillOpacity": 1
};

var two = {
	"fillColor": "#ff6800",
    "color": "black",
    "weight": 0,
	"fillOpacity": 1
};

var three = {
	"fillColor": "#ffcc00",
    "color": "black",
    "weight": 0,
	"fillOpacity": 1
};

var four = {
	"fillColor": "#25cd1d",
    "color": "black",
    "weight": 0,
	"fillOpacity": 1
};

var five = {
	"fillColor": "#26d987",
    "color": "black",
    "weight": 0,
	"fillOpacity": 1
};

var six = {
	"fillColor": "#00c0ff",
    "color": "black",
    "weight": 0,
	"fillOpacity": 1
};

var seven = {
	"fillColor": "#0e65a8",
    "color": "black",
    "weight": 0,
	"fillOpacity": 1
};

var none = {
	"fillColor": "transparent",
    "color": "black",
    "weight": 0,
	"fillOpacity": 0
};

var countrieslayer = L.geoJson(countries);

for (i=0; i <= 600; i++)
{
if (countrieslayer._layers[i]){
var country = countrieslayer._layers[i];
map.addLayer(country);
country.setStyle(red);
}
}

var mammalszones = L.geoJson(mammals);
var amphibianszones = L.geoJson(amphibians);

$("#amp_zone_btn").mouseover(function(){
amphibianlayeron();
})

$("#mam_zone_btn").mouseover(function(){
mammallayeron();
})

$("#amp_zone_btn").mouseout(function(){
zonesoff();
})

$("#mam_zone_btn").mouseout(function(){
zonesoff();
})

function zonesoff(){
	
$("#species_richness_scale").hide();

for (i=0; i <= 600; i++){

if (countrieslayer._layers[i]){
var country = countrieslayer._layers[i];
country.setStyle(red);

}
}

for (var polygon in amphibianszones._layers) {
map.removeLayer(amphibianszones._layers[polygon]);
}
for (var polygon in mammalszones._layers) {
map.removeLayer(mammalszones._layers[polygon]);
}
}


// Add and colour EDGE Zones (amphibians)

function amphibianlayeron(){

$("#species_richness_scale").show();

for (i=0; i <= 600; i++){

if (countrieslayer._layers[i]){
var country = countrieslayer._layers[i];
country.setStyle(grey);

}
}

for (var polygon in amphibianszones._layers) {
map.addLayer(amphibianszones._layers[polygon]);
amphibianszones._layers[polygon].setStyle(none);
for (var inner in amphibianszones._layers[polygon]._layers){
if(inner && amphibianszones._layers[polygon].feature.id){
if(amphibianszones._layers[polygon].feature.id >= 150){
amphibianszones._layers[polygon].setStyle(one);
}
else if(amphibianszones._layers[polygon].feature.id >= 140){
amphibianszones._layers[polygon].setStyle(two);
}
else if(amphibianszones._layers[polygon].feature.id >= 120){
amphibianszones._layers[polygon].setStyle(three);
}
else if(amphibianszones._layers[polygon].feature.id >= 100){
amphibianszones._layers[polygon].setStyle(four);
}
else if(amphibianszones._layers[polygon].feature.id >= 80){
amphibianszones._layers[polygon].setStyle(five);
}
else if(amphibianszones._layers[polygon].feature.id >= 60){
amphibianszones._layers[polygon].setStyle(six);
}
else if(amphibianszones._layers[polygon].feature.id >= 40){
amphibianszones._layers[polygon].setStyle(seven);
}
}
}
} 
}


// Add and colour EDGE Zones (mammals)

function mammallayeron(){

$("#species_richness_scale").show();

for (i=0; i <= 600; i++){

if (countrieslayer._layers[i]){
var country = countrieslayer._layers[i];
country.setStyle(grey);

}
}

for (var polygon in mammalszones._layers) {
map.addLayer(mammalszones._layers[polygon]);
mammalszones._layers[polygon].setStyle(none);
for (var inner in mammalszones._layers[polygon]._layers){
if(inner && mammalszones._layers[polygon].feature.id){
if(mammalszones._layers[polygon].feature.id >= 150){
mammalszones._layers[polygon].setStyle(one);
}
else if(mammalszones._layers[polygon].feature.id >= 140){
mammalszones._layers[polygon].setStyle(two);
}
else if(mammalszones._layers[polygon].feature.id >= 120){
mammalszones._layers[polygon].setStyle(three);
}
else if(mammalszones._layers[polygon].feature.id >= 100){
mammalszones._layers[polygon].setStyle(four);
}
else if(mammalszones._layers[polygon].feature.id >= 80){
mammalszones._layers[polygon].setStyle(five);
}
else if(mammalszones._layers[polygon].feature.id >= 60){
mammalszones._layers[polygon].setStyle(six);
}
else if(mammalszones._layers[polygon].feature.id >= 40){
mammalszones._layers[polygon].setStyle(seven);
}
}
}
} 
}


for (i=0; i <= 600; i++)
{
if (countrieslayer._layers[i]){
var country = countrieslayer._layers[i];
$("#countries").append("<option value='"+ country.feature.properties.name + "'>" + country.feature.properties.name + "</option>");
}
}

$("#countries").change(function(){

for (i=0; i <= 600; i++){

if (countrieslayer._layers[i]){
var country = countrieslayer._layers[i];
country.setStyle(red);
if (country.feature.properties.name == $("#countries").val()){

country.setStyle(blue);

}
}
}
});


// Popups on country click


var group_nav = "<div class='mam_tab'><a href='#' onclick='hidetabs(\"mammals\"); return false;'>Mammals</a></div><div class='amp_tab'><a href='#' onclick='hidetabs(\"amphibians\"); return false;'>Amphibians</a></div><div class='cor_tab'><a href='#' onclick='hidetabs(\"coral\"); return false;'>Corals</a></div>"

countrieslayer.on("mouseover", function (e) {
	popup = [];
	var selectedcountry = e.layer.feature.properties.name;
	var selectedlayer = e.layer;
	for (i=0; i <= species.length; i++){
	if(species[i]){
	var countriesforspecies = species[i].countries;
	if(countriesforspecies.indexOf(selectedcountry) != -1)
	
	{
	if(species[i].edge_rank <= 100) { 
	species[i].link = "<a class='popup_link' href='http://www.edgeofexistence.org/"+ species[i].edge_group.toLowerCase().replace(' ', '_') +"/species_info.php?id="+ species[i].edge_species_id +"'><b>Common names:</b> " + species[i].common_names + "</a>"
	}
	else { 
	species[i].link = "<b>Common names:</b> " + species[i].common_names	
	}
	
	if(species[i].species_image) {
	species[i].species_thumb = "<img class='thumb_popup' width=50 height=33 src='http://www.edgeofexistence.org/" + species[i].species_image + "'/>"
	}
	else { 
	species[i].species_thumb = "<img class='thumb_popup' width=50 height=33 src='http://www.edgeofexistence.org/conservation/maps/holder_logo.png' />"	
	}

	popup.push("<li class='" + species[i].edge_group + "'>"+ species[i].species_thumb +"<div id='desc_popup'><b>Scientific name:</b> " + species[i].scientific_name + "<br /> <b>EDGE Rank:</b> " + species[i].edge_rank + "<br />"+species[i].link +"</div></li>");
	}	
	}
	}
	if(popup.length > 0){
	selectedlayer.bindPopup(group_nav + "<h2 class='popup_title'>EDGE species in " + selectedcountry + "</h2><ul>" + popup.join('') + "</ul>");
	}
	else{
	selectedlayer.bindPopup("No EDGE species here.");
	}
});


// Search

$("#searchfield").keyup(function(){
	
for (i=0; i <= 600; i++){
if (countrieslayer._layers[i]){
var country = countrieslayer._layers[i];
country.setStyle(red);
}
}

$("#searchresult").html("");

var searchvalue = $("#searchfield").val();

var searchresult = [];
var highlightcountries = [];

if (searchvalue.length >= 1){

for (i=0; i <= species.length; i++){

if(species[i]){

if(species[i].common_names.toLowerCase().indexOf(searchvalue.toLowerCase()) >= 0){
	
if (species[i].countries.length > 1){

if(species[i].edge_rank <= 100) {
species[i].link = "<a href='http://www.edgeofexistence.org/"+ species[i].edge_group.toLowerCase() +"/species_info.php?id="+ species[i].edge_species_id +"'>The " + species[i].common_names + "</a>"
}
else
{species[i].link = "The " + species[i].common_names }

	if(species[i].species_image) {
	species[i].species_thumb = "<img class='thumb_popup' width=100 height=66 src='http://www.edgeofexistence.org/" + species[i].species_image + "'/>"
	}
	else { 
	species[i].species_thumb = "<img class='thumb_popup' width=100 height=66 src='http://www.edgeofexistence.org/conservation/maps/holder_logo.png' />"	
	}

searchresult.push("<span class='list_results'>"+ species[i].species_thumb+"<b>"+ species[i].link+"</b> can be found in " + species[i].countries + ". It has an EDGE rank of " + species[i].edge_rank + "<br /></span>");
highlightcountries.push(species[i].countries);
}
}
}
}
$("#searchresult").html("<div id='result_count'><i>" + searchresult.length + " results </i></div><br />" + searchresult.join(" "));
highlightcountries = highlightcountries.join(" ");

for (i=0; i <= 600; i++)
{
if (countrieslayer._layers[i]){
var country = countrieslayer._layers[i];

if (highlightcountries.indexOf(country.feature.properties.name) > -1){
country.setStyle(blue);

}
}
}
}

});

});

//Filters

function hidetabs(tabname){

  $("#edge_map li").css("display", "none");
  $("li."+tabname+"").css("display", "block");
  
  $(".mam_tab").click(function() {
  $(".mam_tab a:link").css("border-bottom", "5px solid #c91414");
  $(".amp_tab a:link").css("border-bottom", "5px solid #FAFAFA");
  $(".cor_tab a:link").css("border-bottom", "5px solid #FAFAFA");
});

  $(".amp_tab").click(function() {
  $(".amp_tab a:link").css("border-bottom", "5px solid #148f0d");
  $(".mam_tab a:link").css("border-bottom", "5px solid #FAFAFA");
  $(".cor_tab a:link").css("border-bottom", "5px solid #FAFAFA");
});
  
  $(".cor_tab").click(function() {
  $(".cor_tab a:link").css("border-bottom", "5px solid #350a7d");
  $(".mam_tab a:link").css("border-bottom", "5px solid #FAFAFA");
  $(".amp_tab a:link").css("border-bottom", "5px solid #FAFAFA");
});
  


};
