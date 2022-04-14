import React, { useState } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Fab } from '../components/Fab'


export const CounterScreen = () => {
    const [contador, setContador] = useState(10)
    return (
        <View style={styles.container}>
            <Text style={styles.title}>contador: {contador}</Text>
            {/* por defecto todos los componentes de RN tienen position relative */}
            {/* flex 1 dice que tome toda la altura y el ancho disponible del padre */}
            {/* <TouchableOpacity
                onPress={() => setContador(contador - 1)}
                accessibilityLabel="Learn more about this purple button"
                style={styles.fabLocationBR}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>-1</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => setContador(contador + 1)}
                accessibilityLabel="Learn more about this purple button"
                style={styles.fabLocationBL}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>+1</Text>
                </View>
            </TouchableOpacity> */}
            <Fab
                title="-1"
                onPress={() => setContador(contador - 1)}
                position="bl"
            />
            <Fab
                title="+1"
                onPress={() => setContador(contador + 1)}
                position="br"
            />
            {/* //!siempre que se usa texto tiene que haber un text */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        position: 'relative'
    },
    fabLocationBL: {
        position: 'absolute',
        bottom: 50,
        right: 25
    },
    fabLocationBR: {
        position: 'absolute',
        bottom: 50,
        left: 25
    },
    fab: {
        backgroundColor: "#5856D6",
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center'
    },
    fabText: {
        alignSelf: "center",
        color: "white",
        fontSize: 25,
        fontWeight: 'bold',

    }
})