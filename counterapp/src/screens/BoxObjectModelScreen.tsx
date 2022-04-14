import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const boxObjectModelScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Box object Mdel
            </Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundcolor: "blue",
        flex: 1
    },
    title: {
        fontSize: 30,
        borderWidth: 10,
        padding: 50,
        margin: 30,
        // backgroundColor: "red",
    }
});