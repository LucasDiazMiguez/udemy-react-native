import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const FlexScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.caja1}> caja 1</Text>
            <Text style={styles.caja2}> caja 2</Text>
            <Text style={styles.caja3}> caja 3</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "skyblue",
        flexDirection: 'row',
        justifyContent: "flex-end",
        alignItems: 'flex-end'
    },
    caja1: {

        borderWidth: 2,
        borderColor: "white",
        fontSize: 20
    },
    caja2: {

        borderWidth: 2,
        borderColor: "white",
        fontSize: 20
    },
    caja3: {

        borderWidth: 2,
        borderColor: "white",
        fontSize: 20
    },
});