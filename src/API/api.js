function api () {
    return fetch('https://api.punkapi.com/v2/beers')
    .then(respo => respo.json()).then(data => data )
}

export default api
