function api () {
    return fetch('https://api.punkapi.com/v2/beers').then(respo => respo.json() )
    .catch(error => {
        console.error(error)
     }) ; 
}

export default api
