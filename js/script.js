

/* Create a new instance of leaflet map. 
`map` is the ID of the div where we want to load our map
setView determines the lat/long of our centerpoint
the last number is the zoom level of our map */
var map = L.map('map').setView([38.952881, -92.3303262], 12);

/* This defines which tileset we're calling into our map */
/* `addTo()` applies the tile set to our map, which is defined above as `map`*/
// L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);




/* Helper function to change a text string to Title Case */
/* Whatever value we pass lands in the function as `str`.
/* The function translates that to a title case string and returns the new value */
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}



/* Thing to do when the page has finished loading */
$(document).ready(function() {
    getData();
});


/* Get our Json Data. */
function getData() {
	$.getJSON("js/polls.json", function(data) {
		//When we have the data, pass it to the `drawMarkers()` function
		drawMarkers(data);
	});
}



//This is where we define a new icon. If we want to use it, we can pass this variable
//as an argument in the `L.marker()` function below.
var myIcon = L.icon({
    iconUrl: 'img/pink.png'
});




/* This is where we loop through our data and draw our markers */
function drawMarkers(data) {

	for (i=0; i < data.length; i++) {

		//Define our variables here.
		var lat = data[i]["latitude"];
		var lon = data[i]["longitude"];
		var precinct = data[i]["PRECINCT"];
		var placeName = data[i]["POLLING PLACE"];
		var address = data[i]["POLL ADDRESS"];

		//Run the plane name and address variable through the `toTitleCase()` function
		//In order to get a prettier title case string. 
		var lowerCasePlaceName = toTitleCase(placeName);
		var lowerCaseAddress = toTitleCase(address); 

		//Lets store our markup as a variable to keep things nice and tidy.
		var markup = 
			"<span class='precinct'>Precinct: "+precinct+"</span><br>"+
			"<span class='placeName'>"+lowerCasePlaceName+"</span><br>"+
			"<span class='address'>"+lowerCaseAddress+"</span>";

		//Draw the marker here. Pass the lat/long value unique to each location
		//and parse the markup to the `bindPopup` method so it shows up when a marker is selected
		L.marker([lat, lon]).addTo(map)
			.bindPopup(markup)
			.openPopup();

		// Alternate marker call uses `myIcon` to draw a different marker.
		// L.marker([lat, lon], {icon: myIcon}).addTo(map)
		// 	.bindPopup(markup)
		// 	.openPopup();

	}


	
}





















