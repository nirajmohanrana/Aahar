import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantDetails from "./src/screens/RestaurantDetails";
import DishDetailsScreen from "./src/screens/DishDetailsScreen";

//import Basket from "./src/screens/Basket";
//import OrdersScreen from "./src/screens/OrdersScreen";


export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      {/* <RestaurantDetails /> */}
      {/* <DishDetailsScreen /> */}

      {/*<Basket /> */}
      {/*<OrdersScreen /> */}


      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
