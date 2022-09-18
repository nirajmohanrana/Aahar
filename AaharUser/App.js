import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantDetails from "./src/screens/RestaurantDetails";
import DishDetailsScreen from "./src/screens/DishDetailsScreen";
<<<<<<< HEAD
import OrdersScreen from "./src/screens/OrdersScreen";
import OrderDetails from "./src/screens/OrderDetails";


//import Basket from "./src/screens/Basket";
//import OrdersScreen from "./src/screens/OrdersScreen";

>>>>>>> a24f42f45b40269ff31cf485ef74cc0e1eefcca6

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      {/* <RestaurantDetails /> */}
      {/* <DishDetailsScreen /> */}
<<<<<<< HEAD
      {/* <OrdersScreen /> */}
      <OrderDetails />


      {/*<Basket /> */}
      {/*<OrdersScreen /> */}

>>>>>>> a24f42f45b40269ff31cf485ef74cc0e1eefcca6

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
