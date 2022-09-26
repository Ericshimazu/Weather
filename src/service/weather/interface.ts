export interface WeatherResult {
    results: Weather
}
export interface Weather {
    temp: number,
    date: string,
    time: string,
    description: string,
    city: string,
    humidity: string,
    wind_speedy: string,
    sunrise: string,
    sunset: string,
    forecast: Forecast[]
}
export interface Forecast {
    date: string,
    weekday: string,
    min: number,
    max: number,
    description: string,
    condition: string,

    
}