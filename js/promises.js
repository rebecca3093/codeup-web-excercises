fetch('https://api.github.com/users/rebecca3093/events/public', {
    authorization: 'GIT_KEY', // Useful for including session ID (and, IIRC, authorization headers)
})
    .then(response => response.json())
    .then(data => {
        writeToPage(data);
        console.log(data[0].actor.login) // Prints result from `response.json()`
        console.log(data);
    })
    .catch(error => console.error(error))

function writeToPage (data) {
    document.write(data[0].actor.login);
}
