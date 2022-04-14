import React from 'react';

import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';

import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

    const { width } = useWindowDimensions()
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerType: width >= 768 ? 'permanent' : 'front', // Menú modo horizontal
                headerShown: false  // Oculta la hamburguesa
            }}
            drawerContent={(props) => <MenuInterno {...props} />}

        >
            <Drawer.Screen name="StackNavigator" component={StackNavigator} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        </Drawer.Navigator>
    );
}

const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {
    return (<DrawerContentScrollView>
        <View style={styles.MenuLateralImg}>
            <Image source={{
                uri: "https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1214428300?k=20&m=1214428300&s=170667a&w=0&h=NPyJe8rXdOnLZDSSCdLvLWOtIeC9HjbWFIx8wg5nIks="

            }}
                style={styles.avatar}
            />
        </View>
        {/* Menu options          */}
        <View style={styles.routesContainer}>
            <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('StackNavigator')} >
                {/*  solo podes llamar a las drawerscreens             */}
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate('SettingsScreen')} >
                <Text>Settings</Text>
            </TouchableOpacity>
        </View>
    </DrawerContentScrollView>
    )
}

