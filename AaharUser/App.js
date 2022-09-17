import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantDetails from "./src/screens/RestaurantDetails";

export default function App() {
  return (
    <View style={styles.container}>
      <RestaurantDetails />
      {/* <HomeScreen /> */}

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
