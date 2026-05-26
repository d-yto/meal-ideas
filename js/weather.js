const GEO_URL = "https://geocoding-api.open-meteo.com/v1/search"
const WEATHER_URL = "https://api.open-meteo.com/v1/forecast"


async function getLocation(){
    let response = await fetch(
        `${GEO_URL}?name=${encodeURIComponent(city)}&count=1`)
    if (!response.ok) throw new Error(
        `Geocoding failed: ${response.status} `)

    let data = await response.json()
    let results = data.results
    if(!results || data.response === 0){
        throw new Error(`city: ${city} not found`)
    }
    return {
        name:results[0].name,
        country:results[0].country,
        latitude:results[0].latitude,
        longitude:results[0].longitude,
    }

}

async function getWeather() {
    
}