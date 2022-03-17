
//variables

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
        $('#weather').html(buildMainCard(data.daily));
        console.log(data)
    })
    .catch((err) => {
        // Do something for an error here
    });

//Function to get data on the page



