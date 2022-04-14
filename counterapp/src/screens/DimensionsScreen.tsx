import React from 'react'
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'

export const DimensionsScreen = () => {
    const { width, height } = useWindowDimensions()
    return (
        <View>

            <View style={styles.container}>
                <View style={{
                    ...styles.cajaMorada,
                    width: width * 0.2
                }}>
                    <Text>Dimensiones screen </Text>
                </View>
                <View style={{
                    ...styles.cajaNaranja,
                    width: width * 0.2
                }}>
                    <Text>Dimensiones screen </Text>
                </View>
            </View>
            <View>
                <Text>
                    dimensiones: {width}
                </Text>
                <Text>
                    dimensiones:  {height}
                </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        width: '100%',
        height: 600
    },
    cajaMorada: {
        backgroundColor: '#5856D6',
        width: '50%',
        height: '50%'
    },
    cajaNaranja: {
        backgroundColor: '#F0A23B',
        width: '50%',
        height: '50%'
    },
});