

let startingLat = 33.44;
let startingLon = -94.04;

getWeatherData(startingLat, startingLon);

function getWeatherData () {
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
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Temp: ${weather.dailyTemp}</li>
                    <li class="list-group-item">Hum: ${weather.humidity}</li>
                    <li class="list-group-item">Pressure: ${weather.pressure}</li>
                </ul>
            </div>`
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