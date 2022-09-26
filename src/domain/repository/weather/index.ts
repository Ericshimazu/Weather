import { weatherService } from "../../../service";
import { ForecastDto } from "../../dto/forecast";
import { WeatherDto } from "../../dto/weather";

export const getWeather = async (latitude: number, longitude: number): Promise<WeatherDto> => {
	const weather = await weatherService.getWeather(latitude, longitude)
	const result = weather.results
	
	return ({ 
		description: result.description,
		forecast: result.forecast.map<ForecastDto>(forecast => ({
			description: forecast.description,
			weekday: forecast.weekday,
			condition: forecast.condition,
			max: forecast.max,
			min: forecast.min,
			date: forecast.date
		})),
		sunrise: result.sunrise,
		temperature: result.temp,
		sunset: result.sunset,
		city: result.city,
		date: result.date,
		time: result.time,
		wind: result.wind_speedy,
		humidity: result.humidity,
	})
}