const GEO_URL = "https://geocoding-api.open-meteo.com/v1/search"
const WEATHER_URL = "https://api.open-meteo.com/v1/forecast"


async function getLocation(){
    try {
        let response = await fetch(
            `${GEO_URL}?name=${encodeURIComponent(city)}&count=1`)
        if (!response.ok) throw new Error(
            `Geocoding failed: ${response.status} `)

        let data = await response.json()
        if(!data.results || data.response === 0){
            throw new Error(`city: ${city} not found`)
        }
    }
}