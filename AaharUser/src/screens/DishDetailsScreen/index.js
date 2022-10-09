import { useState } from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import restaurants from "../../../assets/data/restaurants.json";
const dish = restaurants[0].dishes[2];

const DishDetailsScreen = () => {
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(2);

  const onMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const onPlus = () => {
    setQuantity(quantity + 1);
  };

  const getTotal = () => {
    return (dish.price * quantity).toFixed(2);
  };

  return (
    <View style={styles.page}>
      <Text style={styles.name}> {dish.name} </Text>
      <Text style={styles.description}> {dish.description} </Text>
      <View style={styles.separator} />

      <View style={styles.row}>
        <AntDesign
          name="minuscircleo"
          size={30}
          color={"black"}
          onPress={onMinus}
        />
        <Text style={styles.quantity}>{quantity}</Text>
        <AntDesign
          name="pluscircleo"
          size={30}
          color={"black"}
          onPress={onPlus}
        />
      </View>

      <Pressable
        onPress={() => navigation.navigate("Basket")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>
          Add {quantity} to basket &#8226; (${getTotal()})
        </Text>
      </Pressable>
    </View>
  );
};

export default DishDetailsScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    paddingVertical: 40,
    padding: 10,
  },
  name: {
    fontSize: 30,
    fontWeight: "500",
    letterSpacing: 0.7,
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    color: "#525252",
  },
  separator: {
    height: 1,
    backgroundColor: "lightgray",
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  quantity: {
    fontSize: 30,
    fontWeight: "bold",
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: "black",
    marginTop: "auto",
    padding: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});
