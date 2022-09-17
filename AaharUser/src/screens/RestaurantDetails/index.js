import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import restaurants from "../../../assets/data/restaurants.json";
import { LinearGradient } from "expo-linear-gradient";
const restaurant = restaurants[0];

const RestaurantDetails = () => {
  return (
    <View style={styles.page}>
      <View>
        <Image
          source={{ uri: restaurant.image }}
          style={styles.image}
          resizeMode="cover"
        ></Image>

        <View style={styles.gradient}>
          <LinearGradient
            colors={["rgba(0,0,0,0.8)", "transparent"]}
            start={[0, 0.1]}
            end={[0, 0.5]}
            style={{ width: "100%", aspectRatio: 5 / 3 }}
          />
        </View>
      </View>

      <Ionicons
        name="arrow-back-circle"
        size={40}
        color="white"
        style={styles.imageIcon}
      />

      <View style={styles.container}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subtitle}>
          $ {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}--
          {restaurant.maxDeliveryTime} minutes
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
  },
  gradient: {
    position: "absolute",
    width: "100%",
    aspectRatio: 5 / 3,
  },
  imageIcon: {
    position: "absolute",
    top: 40,
    left: 15,
  },
  container: {
    margin: 10,
  },
  title: {
    fontSize: 35,
    fontWeight: "600",
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 15,
    color: "gray",
  },
});

export default RestaurantDetails;
