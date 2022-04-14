
import React from "react"
import { StackScreenProps } from "@react-navigation/stack"
import { Button, Text, View } from "react-native"

import { styles } from "../theme/appTheme"

interface Props extends StackScreenProps<any, any> {

}

export const Pagina3Screen = ({ navigation }: Props) => {

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                Página finaaal
            </Text>
            <Button
                title="Regresar"
                onPress={() => navigation.pop()}
            />
            <Button
                title="Volver a la home"
                onPress={() => navigation.popToTop()}
            />
        </View>
    )
}
