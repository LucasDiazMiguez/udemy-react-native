import React, { useEffect } from 'react'
import { Button, Text, View, TouchableOpacity } from 'react-native'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { styles } from '../theme/appTheme'

interface Props extends DrawerScreenProps<any, any> {

}

export const Pagina1Screen = ({ navigation }: Props) => {

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => <Button title="press" onPress={() => navigation.toggleDrawer()} />
        })
    }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                Pagina1Screen
            </Text>
            <Button
                title="Ir página 2"
                onPress={() => navigation.navigate('Pagina2Screen')}
            />


            <Text>Navegar con argumentos</Text>

            <View>

                <TouchableOpacity
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 1,
                        name: 'pedro'
                    })}
                    style={{ ...styles.buttonBig, backgroundColor: '#5856D6' }}
                >
                    <Text style={styles.buttonBigText}>
                        pedro
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('PersonaScreen', {
                        id: 4,
                        name: 'jorge'
                    })}
                    style={{ ...styles.buttonBig }}
                >
                    <Text style={styles.buttonBigText}>
                        Jorgessssssssssssssssaaaaaaaaaaaaaaaaaaa
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

