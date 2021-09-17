import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";
import NavFavourites from "../components/NavFavourites";

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.screenContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
        <Image
            source={require("../assets/uber_logo.png")}
            resizeMode="contain"
            style={{ height: 70, width: 70, left: 30, top: 35, tintColor: 'white' }}
          />

        </View>

        <GooglePlacesAutocomplete
          placeholder="Where From"
          styles={{
            container: {
              marginTop: -10,
              flex: 0,
              marginLeft: -20,
              padding: 5,
              position: 'absolute',
              top: 150,
              left: 5,
              width: '100%',
              zIndex: 100,
            },
            textInput: {
              fontSize: 15,
              marginLeft: 20,
              borderColor: '#dddddf',
              borderWidth: 1,
            },
          }}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: "YourKey",
            language: "en",
          }}
          debounce={300}
          nearbyPlacesAPI="GooglePlacesSearch"
        />

        <NavOptions />
        <NavFavourites />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    marginLeft: 12,
    marginTop: 20,
  },
  header: {
    margin: 0,
    padding: 0,
    height: "37%",
    width: 380,
    backgroundColor: "black",
    right: "4%",
    bottom: "5%",
  },
});
