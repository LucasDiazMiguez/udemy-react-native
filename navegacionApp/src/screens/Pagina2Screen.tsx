import React, { useEffect } from "react"
import { StackScreenProps } from "@react-navigation/stack"
import { Button, Text, View } from "react-native"
import { styles } from "../theme/appTheme"

interface Props extends StackScreenProps<any, any> {

}

export const Pagina2Screen = ({ navigation }: Props) => {

    useEffect(() => {

        navigation.setOptions({
            title: 'Hola Mundo',
            headerBackTitle: "Atrás"//para ios 

        })
    }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                Pagina1Screen
            </Text>
            <Button
                title="Página 3"
                onPress={() => navigation.navigate('Pagina3Screen')}
            />
        </View>
    )
}
