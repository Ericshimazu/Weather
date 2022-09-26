import { ForecastDto } from "./forecast";

export interface WeatherDto {
	temperature: number,
	date: string,
	time: string,
	description: string,
	city: string,
	humidity: string,
	wind: string,
	sunrise: string,
	sunset: string,
	forecast: ForecastDto[]
}