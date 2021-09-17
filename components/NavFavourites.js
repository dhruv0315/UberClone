import React from "react";
import { TouchableOpacity } from "react-native";
import { FlatList } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";

const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "1597 Geta Circle",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "IBM",
  },
];

const NavFavourites = () => {
  return (
    <View style={{top: 40}}>
      <FlatList
        data={data}
        ItemSeparatorComponent={() => (
          <View style={{ backgroundColor: "#eaeaea", height: 0.7 }} />
        )}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { location, destination, icon } }) => (
          <View>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 13,
              }}
            >
              <Icon
                name={icon}
                type="font-awesome-5"
                color="white"
                size={16}
                style={{
                  height: 35,
                  width: 35,
                  backgroundColor: "#DDDDDF",
                  borderRadius: 100,
                  alignContent: "center",
                  justifyContent: "center",
                }}
              />
              <View>
                <Text
                  style={{ fontWeight: "700", fontSize: 15, paddingLeft: 10 }}
                >
                  {location}
                </Text>
                <Text
                  style={{ fontWeight: "200", fontSize: 12, paddingLeft: 10 }}
                >
                  {destination}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
