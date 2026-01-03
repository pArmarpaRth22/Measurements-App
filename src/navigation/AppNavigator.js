import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import AddCustomerScreen from "../screens/AddCustomerScreen";
import SearchCustomerScreen from "../screens/SearchCustomerScreen";
import AddMeasurementsScreen from "../screens/AddMeasurementsScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: "#F8F6F2" },
          headerTitleStyle: { fontWeight: "600" },
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="AddCustomer"
          component={AddCustomerScreen}
          options={{ title: "Add Customer" }}
        />

        <Stack.Screen name="SearchCustomer" component={SearchCustomerScreen} />

        <Stack.Screen
          name="AddMeasurements"
          component={AddMeasurementsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
