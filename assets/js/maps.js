//this function within the script will use get Element By ID to call teh "map" div ID and  
// calls the google.map rule from google api to place a map object on our page 

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3, // this sets the initial zoom level of the map
        center: { // the lat and lng set to point the map is cented on
            lat: 46.619261,
            lng: -33.134766
        }
    });

    var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

    var locations = [
        { lat: 40.785091, lng: -73.968285 },
        { lat: 41.084045, lng: -73.874256 }, // here is create marker loctaions on the map
        { lat: 40.754932, lng: -73.984016 } // where "rosie" has been!
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    // this code in is taken grom google maps api and it creates cluster markers on the map 
    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}
        
 