import { View, Text, Image, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useRoute, useNavigation } from "@react-navigation/native";

import restaurants from "../../../assets/data/restaurants.json";
import DishListItem from "../../components/DistListItem";
import Header from "../../screens/RestaurantDetailsScreen/Header";
import styles from "./styles";
const restaurant = restaurants[0];

const RestaurantDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const id = route.params?.id;
  console.warn(id);

  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <Header restaurant={restaurant} />}
        data={restaurant.dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
        keyExtractor={(item) => item.name}
      />

      <Ionicons
        onPress={() => navigation.goBack()}
        name="arrow-back-circle"
        size={40}
        color="white"
        style={styles.imageIcon}
      />
    </View>
  );
};

export default RestaurantDetails;
