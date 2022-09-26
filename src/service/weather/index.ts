import weatherApi from "../../config/api";
import { WeatherResult } from "./interface";

export const getWeather = async (latitude: number, longitude: number): Promise<WeatherResult> => {
	const url = `/weather?lat=${latitude}&lon=${longitude}`
	const response = await weatherApi.get(url)
	return response.data
}