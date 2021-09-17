import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

const ConfirmationScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <Image
        style={{
          width: 100,
          height: 100,
          resizeMode: "contain",
          tintColor: "white",
          left: "34%",
          top: "10%",
        }}
        source={require("../assets/uber_logo.png")}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("RideOptions")}
        style={{
          position: "absolute",
          top: 10,
          left: 5,
          padding: 15,
          zIndex: 50,
        }}
      >
        <Icon name="chevron-left" type="font-awesome" size={12} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("HomeScreen")}
        style={{
          position: "absolute",
          top: 10,
          left: 325,
          padding: 15,
          zIndex: 50,
        }}
      >
        <Icon name="chevron-right" type="font-awesome" size={12} color="white" />
      </TouchableOpacity>
      <Image
        source={require("../assets/uberxl_option.png")}
        resizeMode={"contain"}
        style={{ height: 200, width: 200, left: "22%", top: "0%" }}
      />
      <Text
        style={{
          left: "18%",
          top: "-3%",
          fontSize: 20,
          fontWeight: "500",
          color: "white",
        }}
      >
        Your UberXL is on the way!
      </Text>
    </View>
  );
};

export default ConfirmationScreen;

const styles = StyleSheet.create({});
