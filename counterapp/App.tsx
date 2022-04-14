import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { boxObjectModelScreen } from "./src/screens/BoxObjectModelScreen";
import { CounterScreen } from "./src/screens/CounterScreen";
import { DimensionsScreen } from "./src/screens/DimensionsScreen";
import { FlexScreen } from "./src/screens/FlexScreen";
import { HolaMundoScreen } from "./src/screens/HolaMundoScreen";
import { PositionScreen } from "./src/screens/PositionScreen";
import { TareaScreen } from "./src/screens/TareaScreen";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }} >
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionsScreen /> */}
      {/* <PositionScreen /> */}
      {/* <FlexScreen /> */}
      <TareaScreen />
    </SafeAreaView>
  )
}

export default App;
{/* <HolaMundoScreen /> */ }
{/* <CounterScreen />  */ }