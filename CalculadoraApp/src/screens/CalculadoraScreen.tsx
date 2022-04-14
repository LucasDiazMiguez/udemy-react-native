import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { BotonCalc } from '../components/BotonCalc'
import { styles } from '../theme/appTheme'

enum Operadores {
    sumar, restar, multiplicar, dividir
}
export const CalculadoraScreen = () => {

    const [number, setNumber] = useState('100')
    const [oldNumber, setOldNumber] = useState('100')
    const operation = useRef<Operadores>()
    const clean = () => {
        setNumber("0")
        setOldNumber("0")
    }
    const sign = () => {
        if (number.includes('-')) {
            setNumber(number.replace('-', ''))
        } else {
            setNumber('-' + number.replace('-', ''))
        }
    }
    const createNumber = (textnumber: string) => {
        if (number.includes('.') && textnumber === ".")
            return

        if (number.startsWith("0") || number.startsWith('-0')) {
            if (textnumber === ".")
                setNumber(number + textnumber)
            else if (textnumber === "0" && number.includes("."))// si pone 0.14313
                setNumber(number + textnumber)
            else if (textnumber !== "0" && !number.includes("."))//para que cuando empiece ponga el valor que presionas y saque el 0
                setNumber(textnumber)
            else if (textnumber === "0" && !number.includes("."))
                setNumber(number)
        } else
            setNumber(number + textnumber)
    }
    const del = (textnumber: string) => {
        if (number.startsWith("-") && number.length === 2 || number.length === 1)
            setNumber("0")
        else
            setNumber(number.slice(0, -1))

    }
    const updateNumber = () => {
        if (number.endsWith('.')) {
            setOldNumber(number.slice(0, -1))
        } else {
            setOldNumber(number)
        }
        setNumber("0")
    }

    const btnDividir = () => {
        updateNumber()
        operation.current = Operadores.dividir
    }
    const btnMultiplicar = () => {
        updateNumber()
        operation.current = Operadores.multiplicar
    }
    const btnRestar = () => {
        updateNumber()
        operation.current = Operadores.restar
    }
    const btnSumar = () => {
        updateNumber()
        operation.current = Operadores.sumar
    }
    const calcular = () => {
        const numberOne = Number(oldNumber)
        const numberTwo = Number(number)

        switch (operation.current) {
            case Operadores.sumar:
                setNumber(`${numberOne + numberTwo}`)
                break;
            case Operadores.restar:
                setNumber(`${numberOne - numberTwo}`)
                break;
            case Operadores.multiplicar:
                setNumber(`${numberOne * numberTwo}`)

                break;
            case Operadores.dividir:
                setNumber(`${numberOne / numberTwo}`)

                break;

            default:
                break;
        }
        setOldNumber("0")
    }
    return (
        <View style={styles.calculadoraContainer}>
            {oldNumber !== "0" && <Text style={styles.smallResult}>{oldNumber}</Text>}
            <Text
                style={styles.resultados}
                numberOfLines={1}
                adjustsFontSizeToFit
            >{number}</Text>
            <View style={styles.fila}>
                <BotonCalc text="C" color="#9B9B9B" action={clean} />
                <BotonCalc text="+/-" color="#9B9B9B" action={sign} />
                <BotonCalc text="del" color="#9B9B9B" action={del} />
                <BotonCalc text="/" color="#FF9427" action={btnDividir} />
            </View>
            <View style={styles.fila}>
                <BotonCalc text="7" action={createNumber} />
                <BotonCalc text="8" action={createNumber} />
                <BotonCalc text="9" action={createNumber} />
                <BotonCalc text="X" color="#FF9427" action={btnMultiplicar} />
            </View>
            <View style={styles.fila}>
                <BotonCalc text="4" action={createNumber} />
                <BotonCalc text="5" action={createNumber} />
                <BotonCalc text="6" action={createNumber} />
                <BotonCalc text="-" color="#FF9427" action={btnRestar} />
            </View>
            <View style={styles.fila}>
                <BotonCalc text="1" action={createNumber} />
                <BotonCalc text="2" action={createNumber} />
                <BotonCalc text="3" action={createNumber} />
                <BotonCalc text="+" color="#FF9427" action={btnSumar} />
            </View>
            <View style={styles.fila}>
                <BotonCalc text="0" ancho action={createNumber} />
                <BotonCalc text="." action={createNumber} />
                <BotonCalc text="=" color="#FF9427" action={calcular} />
            </View>
        </View>
    )
}
