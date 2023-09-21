import React from "react";
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IndexScreen from "./src/screens/IndexScreen";
import { Provider as LocationProvider } from "./src/context/LocationContext";
import ShowScreen from "./src/screens/ShowScreen";
import DetailScreen from "./src/screens/DetailScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <LocationProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitle: "Locations" }}>
          <Stack.Screen name="Index" component={IndexScreen} />
          <Stack.Screen name="Show" component={ShowScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </LocationProvider>
  );
}
