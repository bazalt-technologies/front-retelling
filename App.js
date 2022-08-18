import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Settings from "./screens/Settings";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";

const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name = "Home"
        component={Home}
      />
      <Stack.Screen
        name = "SignUp"
        component={SignUp}
      />
      <Stack.Screen
        name = "Profile"
        component={SignIn}
      />
      <Stack.Screen
        name = "Settings"
        component={Settings}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;