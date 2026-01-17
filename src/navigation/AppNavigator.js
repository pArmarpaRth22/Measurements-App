import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import HomeScreen from "../screens/HomeScreen";
import AddCustomerScreen from "../screens/AddCustomerScreen";
import SearchCustomerScreen from "../screens/SearchCustomerScreen";
import AddMeasurementsScreen from "../screens/AddMeasurementsScreen";

import { AuthContext } from "../context/AuthContext";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#F8F6F2" },
          headerTitleStyle: { fontWeight: "600" },
          headerShown: false,
        }}
      >
        {/* AUTH FLOW */}
        {!user ? (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
          </>
        )}

        {/* APP SCREENS */}
        <Stack.Screen
          name="AddCustomer"
          component={AddCustomerScreen}
          options={{ title: "Add Customer" }}
        />

        <Stack.Screen
          name="SearchCustomer"
          component={SearchCustomerScreen}
        />

        <Stack.Screen
          name="AddMeasurements"
          component={AddMeasurementsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
