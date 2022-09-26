import React from "react"
import { SafeAreaView, Text, View } from "react-native"
import CurrentForecast from '../../components/CurrentForecast'
import NextForecast from "../../components/NextForecast"
import Styles from "./styles"

const WeatherApp = () => {
    return (
        <SafeAreaView style={Styles.body}>
            <CurrentForecast />
            <NextForecast />
        </SafeAreaView>
        
    )
}

export default WeatherApp