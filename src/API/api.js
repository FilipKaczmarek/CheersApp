function api( success ) {
    return fetch('https://api.punkapi.com/v2/beers')
    .then(respo => respo.json()).then( success )
}

export default api
