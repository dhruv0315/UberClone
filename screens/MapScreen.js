import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Map from "../components/Map";
import { createStackNavigator } from "@react-navigation/stack";
import NavigateCard from "../components/NavigateCard";
import RideOptions from "../components/RideOptions";
import ConfirmationScreen from "./Confirmation";

const MapScreen = () => {
  const Stack = createStackNavigator();
  
  return (
    <View style={styles.container}>
      <View style={styles.topHalf}>
        <Map />
      </View>
      <View style={styles.bottomHalf}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RideOptions"
            component={RideOptions}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Confirmation"
            component={ConfirmationScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topHalf: {
    height: "45%",
  },
  bottomHalf: {
    height: "55%",
  },
});
