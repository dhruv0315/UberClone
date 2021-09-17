import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin) ;

  const data = [
    {
      id: "1",
      title: "Ride",
      image: require("../assets/uber_ride.png"),
      screen: "MapScreen",
    },
  ];


  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => navigation.navigate(item.screen)}
            style={styles.button}
            disabled={!origin}
          >
            <View style={[(!origin) ? styles.disabledImage : styles.valid]}>
              <Image
                style={{ height: 100, width: 100, resizeMode: "contain", left: 100, bottom: 15}}
                source={item.image}
              />
            
            <Text style={styles.title}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({
  container: {
  },
  button: {
    padding: 2,
    paddingLeft: 6,
    paddingBottom: 10,
    marginBottom: 30,
    paddingTop: 4,
    backgroundColor: "#eaeaea",
    marginHorizontal: 15,
    marginVertical: 10,
    width: 230,
    height: 100,
    borderRadius: 25,
    top: 39,
    left: 40
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
    marginLeft: 20,
    bottom: 40
  },
  disabledImage: {
    opacity: 0.4
  },
  valid: {
    opacity: 1,
  }
});
