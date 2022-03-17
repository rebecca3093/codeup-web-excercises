const OMW_Key = "e8d484337e011c938a532cb8bb0c8ee0";



// Replace ./data.json with your JSON feed
fetch('https://ghibliapi.herokuapp.com')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        // Work with JSON data here
        console.log(data)
    })
    .catch((err) => {
        // Do something for an error here
    })

