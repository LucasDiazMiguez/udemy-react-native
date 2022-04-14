import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: "black",
    },
    resultados: {
        color: 'white',
        fontSize: 60,
        textAlign: "right"
    },
    smallResult: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
        textAlign: "right"
    },
    calculadoraContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20
    },
    fila: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 18,
        paddingHorizontal: 10,
    },
    button: {
        height: 80,
        width: 80,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    buttonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: "black",
    }

});