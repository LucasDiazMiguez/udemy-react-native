
// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import {
//   SafeAreaView,
//   View,
// } from 'react-native';
// import { StackNavigator } from './src/navigator/StackNavigator';

import 'react-native-gesture-handler'

// const App = () => {

//   return (
//     <NavigationContainer>
//       <StackNavigator />
//     </NavigationContainer>
//   );
// };

// export default App;

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  View,
} from 'react-native';
// import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
import { MenuLateral } from './src/navigator/MenuLateral';



const App = () => {

  return (
    <NavigationContainer>
      <MenuLateral />
    </NavigationContainer>
  );
};

export default App;
