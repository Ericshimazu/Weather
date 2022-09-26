import { useCallback, useEffect, useState } from "react"
import { WeatherDto } from "../../../domain/dto/weather" 
import { weatherRepository } from "../../../domain/repository"

const useWeather = (latitude: number, longitude: number) => {
  const [loading, setLoading] = useState(false)
  const [weather, setWeather] = useState<WeatherDto>()

  const loadWeather = useCallback(async () => {
	setLoading(true)

	try {
		const result = await weatherRepository.getWeather(latitude, longitude)
	
		setWeather(result)
		setLoading(false)
	} catch(error) {
		console.log(error);
	}
	
  }, [latitude, longitude])

  useEffect(() => {
	  loadWeather()
  }, [])

  return {
    loading,
    weather,
  }
}

export default useWeather