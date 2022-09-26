import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { ForecastDto } from "../../../domain/dto/forecast"
import Styles from "./styles"


interface Props {
    forecast: ForecastDto
}

const ForecastItem = ( props : Props) => {
    const { forecast } = props;
    return (

        <View style={Styles.container}>
            <View style={Styles.date}>
                <Text>{forecast.weekday}</Text>
                <Text>{forecast.date}</Text>
            </View>
            <View style={Styles.temperature}>
                <Text>{forecast.min}°</Text>
                <Text>{forecast.max}°</Text>
            </View>
        </View>
    )
}

export default ForecastItem