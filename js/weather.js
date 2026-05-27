const GEO_URL = "https://geocoding-api.open-meteo.com/v1/search"
const WEATHER_URL = "https://api.open-meteo.com/v1/forecast"


async function getLocation(city){
    try{

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
        catch(error){
            console.error(`Caught Error: `, error.message)
            throw new Error("Could not connect to the Geo-Coding service. Please check your connection.");
        }
                
}

async function getWeather(latitude, longitude, unit = "celsius") {
    const params = new URLSearchParams({
        latitude,
        longitude,
        current:`temperature_2m,relative_humidity_2m,precipitation,wind_speed_10m,weather_code`,
        unit,
    })
    try{
        const response = await fetch(`${WEATHER_URL}?${params}`)
        if (!response.ok) throw new Error(`Weather fetch failed: ${response.status} `)
            
            const data = await response.json();
            
            
            return{
                temperature: data.current.temperature_2m,
                humidity:data.current.relative_humidity_2m,
                windSpeed:data.current.wind_speed_10m,
                weatherCode:data.current.weather_code,
                precipitation:data.current.precipitation
            }   
        }
        catch(error){
            console.error(`Caught Error: `, error.message)
            throw new Error("Could not connect to the weather service. Please check your connection.");
        }
    }
        
async function fetchWeatherForCity(city, unit){
    const location = await getLocation(city)
    const weather = await getWeather( location.latitude, location.longitude, unit )

    return {...location , ...weather}
}

