fetch('https://api.github.com/users/rebecca3093/events/public', {
    authorization: 'GIT_KEY', // Useful for including session ID (and, IIRC, authorization headers)
})
    .then(response => response.json())
    .then(data => {
        console.log(data) // Prints result from `response.json()`
    })
    .catch(error => console.error(error))

