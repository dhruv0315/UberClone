import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectTravelTimeInformation,
  selectOrigin,
  selectDestination,
} from "../slices/navSlice";

const RideOptions = () => {
  const data = [
    {
      id: "Uber-X-123",
      title: "UberX",
      multiplier: 1,
      image: require("../assets/uberx_option.png"),
      price: "$9.39",
    },
    {
      id: "Uber-XL-456",
      title: "Uber XL",
      multiplier: 1.2,
      image: require("../assets/uberxl_option.png"),
      price: "$11.27",
    },
    {
      id: "Uber-LUX-789",
      title: "Uber LUX",
      multiplier: 1.75,
      image: require("../assets/uberlux_option.png"),
      price: "$16.43",
    },
  ];

  const navigation = useNavigation();
  const [selected, setSelected] = useState("");
  const travelInfo = useSelector(selectTravelTimeInformation);

  return (
    <SafeAreaView style={{ backgroundColor: "white", flexGrow: 1 }}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          style={{
            position: "absolute",
            top: 10,
            left: 5,
            padding: 15,
            zIndex: 50,
          }}
        >
          <Icon name="chevron-left" type="font-awesome" size={12} />
        </TouchableOpacity>
        <Text
          style={{
            textAlign: "center",
            paddingVertical: 20,
            fontSize: 20,
          }}
        >
          Select a Ride - {travelInfo?.distance.text}
        </Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({
          item: { id, title, multiplier, image },
          item,
        }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={[
              id === selected.id ? styles.highlightedList : styles.normalList,
            ]}
          >
            <Image
              style={{
                width: 80,
                height: 80,
                resizeMode: "contain",
              }}
              source={image}
            />
            <View style={{ marginLeft: -30 }}>
              <Text style={{ fontSize: 15, fontWeight: "600" }}>{title}</Text>
              <Text style={{ position: "relative" }}>{travelInfo?.duration.text}</Text>
            </View>
            <Text style={{ fontSize: 16, fontWeight: "600" }}>
              {new Intl.NumberFormat("en-us", {
                style: "currency",
                currency: "CAD",
              }).format((travelInfo?.duration.value * 1.5 * multiplier) / 100)}
              CA
            </Text>
          </TouchableOpacity>
        )}
      />
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Confirmation")}
          disabled={!selected}
          style={[!selected ? styles.disabledButton : styles.normalButton]}
        >
          <Text style={{ textAlign: "center", color: "white", fontSize: 15 }}>
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptions;

const styles = StyleSheet.create({
  normalList: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  highlightedList: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#eaeaea",
  },
  normalButton: {
    backgroundColor: "black",
    paddingHorizontal: 10,
    paddingVertical: 13,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  disabledButton: {
    backgroundColor: "#dddddf",
    paddingHorizontal: 10,
    paddingVertical: 13,
    marginHorizontal: 10,
    marginBottom: 10,
  },
});
