let startingLat = 29.4241;
let startingLon = -98.4936;

getWeatherData(startingLon, startingLat);

function getWeatherData(lon, lat) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${OMW_Key}`)
        .then((response) => {
            if (response.ok) {
                console.log("GREAT SUCCESS")
            } else {
                console.log("NOT  SUCCESSFUL")
            }
            console.log(response)
            return response.json()
        })
        .then((data) => {
            console.log(data);
            // Work with JSON data here
            $('#weather').html(buildCardCont(data.daily));
        })
        .catch(error => {
            console.log(error);
        });
}

function extractWeatherData(dayObj) {
    return {
        date: dayObj.dt,
        dailyTemp: dayObj.temp.day,
        feels_like: dayObj.feels_like,
        humidity: dayObj.humidity,
        pressure: dayObj.pressure,
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
        <div class="card">
            <div class="card-header">
                ${formattedDate}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Temperature: ${weather.dailyTemp}</li>
                <li class="list-group-item">Feels Like: ${weather.dailyTemp}</li>
                <li class="list-group-item">Humidity: ${weather.humidity}</li>
                <li class="list-group-item">Pressure: ${weather.pressure}</li>
            </ul>
        </div>
        <br>`
    return html;
}




function formatDate(unixDate) {
    return new Date(unixDate * 1000).toISOString().split('T')[0];
}

//manual geocode with button
$('#submit').click(function (e) {
    e.preventDefault();
    geocode($('.city-input').val(), MAP_Key).then(function (result) {
        console.log(result);
        map.setCenter(result);
        map.setZoom(15);
        getWeatherData(result[0], result[1]);
    })
})

// Mapbox JS
mapboxgl.accessToken = MAP_Key

let map = initMap(startingLon, startingLat);
let geocodeObject = initGeocoder();
let marker = createMarker(startingLon, startingLat);
let popup = createPopup(startingLon, startingLat);

marker.setPopup(popup);

map.addControl(
    geocodeObject
    );

//Function to Create Map
function initMap(lon, lat) {
    return new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 11,
        center: [lon, lat]
    });
}
//Create a Marker//
function createMarker(lon, lat) {
    return new mapboxgl.Marker()
        .setLngLat([lon, lat])
        .addTo(map);
}

//function to create popup
function createPopup(description, lon, lat) {
    return new mapboxgl.Popup()
        .setLngLat([lon, lat])
        .setHTML(`<p>${description}</p>`)
        .addTo(map);
}

function initGeocoder() {
    return new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false
    })
}

function MapboxGeocoder() {
    marker: true;
}

geocodeObject = new MapboxGeocoder({
    accessToken: MAP_Key,
    mapboxgl: maxboxgl,
    marker: false
});

geocodeObject.on('result', function () {
    console.log(result.center)
    marker = new mapboxgl.Marker({draggable: true})
        .setLngLat(result.center)
        .addTo(map);
    marker.on(onDragEnd)
});

function onDragEnd() {
    console.log(marker.getLngLat());
}



