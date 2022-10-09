import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import styles from "./styles";
import orders from "../../../assets/data/orders.json";
import restaurants from "../../../assets/data/restaurants.json";
import BasketDishItem from "../../components/BasketDishItem";
const order = orders[0];

const OrderDetailsHeader = () => {
  return (
    <View>
      <View style={styles.page}>
        <View>
          <Image
            source={{ uri: order.Restaurant.image }}
            style={styles.image}
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

        <View style={styles.container}>
          <Text style={styles.title}>{order.Restaurant.name}</Text>
          <Text style={styles.subtitle}>{order.status} &#8226; 2 days ago</Text>
          <Text style={styles.menuTitle}>Your Orders</Text>
        </View>
      </View>
    </View>
  );
};

const OrderDetails = () => {
  return (
    <FlatList
      ListHeaderComponent={OrderDetailsHeader}
      data={restaurants[0].dishes}
      renderItem={({ item }) => <BasketDishItem basketDish={item} />}
    />
  );
};

export default OrderDetails;
