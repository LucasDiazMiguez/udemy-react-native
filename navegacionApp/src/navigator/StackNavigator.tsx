import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina2Screen } from '../screens/Pagina2Screen';
import { Pagina3Screen } from '../screens/Pagina3Screen';
import { PersonaScreen } from '../screens/PersonaScreen';


interface RouterParams {
    id: number,
    name: string,
}

export type RootStackParams = {

    Pagina1screen: undefined,
    Pagina2Screen: undefined,
    Pagina3Screen: undefined,
    PersonaScreen: RouterParams

}
const Stack = createStackNavigator<RootStackParams>();
export const StackNavigator = () => {
    return (
        <Stack.Navigator
            //  initialRouteName='Pagina2Screen' para podr empezar por otra cosa
            screenOptions={
                {
                    headerStyle: {
                        elevation: 0,
                        shadowColor: 'transparent'
                    },
                    cardStyle: {
                        backgroundColor: 'white'
                    }
                }
            }
        >
            <Stack.Screen name="Pagina1screen" options={{ title: "Home" }} component={Pagina1Screen} />
            <Stack.Screen name="Pagina2Screen" options={{ title: "Pagina intermedia" }} component={Pagina2Screen} />
            <Stack.Screen name="Pagina3Screen" options={{ title: "Final" }} component={Pagina3Screen} />
            <Stack.Screen name="PersonaScreen" options={{ title: "Personaaaa" }} component={PersonaScreen} />
        </Stack.Navigator >
    );
}