import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props {
    text: string,
    color?: string;
    ancho?: Boolean;
    action: (numeroTexto: string) => void;
}
export const BotonCalc = ({ text = "a", color = "#2D2D2D", ancho = false, action }: Props) => {
    return (
        <TouchableOpacity onPress={() => action(text)}>
            <View style={{ ...styles.button, backgroundColor: color, width: (ancho ? 180 : 80) }}>
                <Text style={{ ...styles.buttonText, color: (color !== "#9B9B9B" ? 'white' : "black") }} >{text}</Text>
            </View>
        </TouchableOpacity>
    )
}
