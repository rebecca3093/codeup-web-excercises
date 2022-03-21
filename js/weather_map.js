let startingLat = 33.44;
let startingLon = -94.04;

getWeatherData(startingLat, startingLon);

function getWeatherData (lon,lat) {
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=33.44&lon=-94.04&appid=" + OMW_Key)
        .then((response) => {
            if (response.ok) {
                console.log("GREAT SUCCESS")
            } else {
                console.log("NOT  SUCCESSFUL")
            }
            return response.json()
        })
        .then((data) => {
            // Work with JSON data here
            $('#weather').html(buildCardCont(data.daily));
            $('#submit')
            console.log(data)
        })
        .catch(error => {
            //console.log(error);
        });
}
function extractWeatherData(dayObj) {
    return {
        date: dayObj.dt,
        dailyTemp: dayObj.temp.day,
        humidity: dayObj.humidity,
        pressure: dayObj.pressure
    }
}

function buildCardCont(dayArr) {
    let html = '<div class="row">'
    for (let i = 0; i < 5; i++) {
        html += buildWeatherCard(dayArr[i]);
    }
    html += '</div>';
    return html;
}

function buildWeatherCard(day) {
    let html = '';
    let weather = extractWeatherData(day);
    let formattedDate = formatDate(weather.date);
    // language=HTML
    html += `
            <div class="card" style="width: 20rem;">
                <div class="card-header">
                    ${formattedDate}
                `
    return html;
}

function formatDate(unixDate) {
    return new Date(unixDate * 1000).toISOString().split('T')[0];
}

$('#submit').click(function (e) {
    e.preventDefault();
    let userLat = $('#lat').val();
    let userLon = $('#lon').val();
    getWeatherData(userLat, userLon);
})


// Mapbox JS


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

$('#userDestination').click(function () {
    geocode(('userLat, User Lon'), MAP_Key).then(function(result) {
        console.log(result);
        map.setCenter(result);
        map.setZoom(17);
    });
})