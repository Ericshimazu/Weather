import React from "react"
import { SafeAreaView, Text, View } from "react-native"
import Divider from "./components/divider"
import ForecastItem from "./components/item"
import useWeather from "./hook/use-weather"
import Styles from "./styles"

const Weather = () => {

    const { weather } = useWeather(-25.9773161, -52.9277801)

    return (
        <SafeAreaView>
            <Divider />
            <Text style={Styles.todayTemperature}>{weather?.temperature}°C</Text>
            <View style={Styles.cityInfo}>
                <Text>{weather?.city}</Text>
                <Text>{weather?.date + '  ' + weather?.time}h</Text>
            </View>
            <Text style={Styles.nextDays}>Previsão para os próximos dias:</Text>
            {weather && weather.forecast.map(item => (
                <>
                    <ForecastItem forecast={item} />
                    <Divider />
                </>
            ))}
        </SafeAreaView>
    )
}

export default Weather