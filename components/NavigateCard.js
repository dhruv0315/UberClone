import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
GooglePlacesAutocomplete;
import { setDestination } from "../slices/navSlice";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import NavFavourites from "./NavFavourites";
import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <View>
        <Text
          style={{ textAlign: "center", paddingVertical: 20, fontSize: 20 }}
        >
          Welcome Back, Dhruv
        </Text>
        <View style={styles.viewContainer}>
          <GooglePlacesAutocomplete
            placeholder="Where To?"
            debounce={300}
            styles={toInputBoxStyles}
            fetchDetails={true}
            enablePoweredByContainer={false}
            returnKeyType={"search"}
            minLength={2}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate("RideOptions");
            }}
            query={{
              key: "YourKey",
              language: "en",
            }}
            nearbyPlacesAPI="GooglePlacesSearch"
          />
        </View>

        <NavFavourites />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: "auto",
          paddingBottom: 15,
          borderTopWidth: 1,
          borderTopColor: "#f2f2f2",
          paddingTop: 20,
        }}
      >
        <TouchableOpacity
        onPress={() => navigation.navigate("RideOptions")}
          style={{
            backgroundColor: "black",
            flexDirection: "row",
            width: 80,
            paddingVertical: 8,
            paddingHorizontal: 10,
            borderRadius: 25,
            justifyContent: "space-between",
          }}
        >
          <Icon name="car" type="font-awesome" color="white" size={15} />
          <Text style={{ color: "white", textAlign: "center" }}>Rides</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const styles = StyleSheet.create({
  viewContainer: {
    borderTopColor: "#eaeaea",
    borderTopWidth: 1,
    flexShrink: 1,
  },
});

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 0,
  },
  textInput: {
    backgroundColor: "#eaeaea",
    borderRadius: 0,
    fontSize: 15,
    top: 5
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
