import { useState } from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import restaurants from "../../../assets/data/restaurants.json";
const restaurant = restaurants[0];

const BasketDishItem = ({ basketDish }) =>{
    return (
    <View style = {styles.row}>
        <View style= {styles.quantityContainer}>
            <Text>1</Text>
        </View>
        <Text style={{fontWeight :'600'}}>{basketDish.name}</Text>
        <Text style={{marginLeft: "auto"}}>${basketDish.price}</Text>
      </View>
    );
}

const Basket = () => {
  const [quantity, setQuantity] = useState(2);

  return (
    <View style={styles.page}>
      <Text style={styles.name}> {restaurant.name} </Text>
      {/* <View style={styles.separator} /> */}
      <Text>Your iteams</Text>

      <FlatList 
       data={restaurant.dishes}
       renderItem={({ item }) => <BasketDishItem basketDish={item}/>}
    
     <View style={styles.separator}></View>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Create Order</Text>
      </View>
    </View>
  );
};

export default Basket;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    paddingVertical: 40,
    padding: 10,
  },
  name: {
    fontSize: 24,
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
  quantityContainer:{
    backgroundColor: "lightgray",
    paddingHorizontal:5,
    paddingVertical:2,
    marginRight:10,
    borderRadius:3,
  },
});
