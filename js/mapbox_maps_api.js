let startingLat = 29.4252;
let startingLon = -98.4916;

let map = initMap(startingLon, startingLat);
let marker = createMarker(startingLon, startingLat);
let popup = createPopup(startingLon, startingLat);

marker.setPopup(popup);

//Function to Create Map
function initMap(lon,lat) {
    mapboxgl.accessToken = MAP_Key;
    return new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 11,
        center: [lon, lat]
    });
}


//Create a Marker
function createMarker(lon, lat) {
    return new mapboxgl.Marker()
        .setLngLat([lon,lat])
        .addTo(map);
}

//function to create popup

function createPopup(lon, lat) {
    return new mapboxgl.Popup()
        .setLngLat([lon,lat])
        .setHTML('')
}