import { View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";

const RestaurantHeader = ({ restaurant }) => {
  return (
    <View style={styles.page}>
      <View>
        <Image source={{ uri: restaurant.image }} style={styles.image}></Image>

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
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subtitle}>
          $ {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}--
          {restaurant.maxDeliveryTime} minutes
        </Text>
        <Text style={styles.menuTitle}>Menu</Text>
      </View>
    </View>
  );
};

export default RestaurantHeader;
