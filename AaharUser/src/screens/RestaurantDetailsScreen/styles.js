import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
    borderBottomColor: "gray",
    borderBottomWidth: 2,
  },
  title: {
    fontSize: 35,
    fontWeight: "500",
    marginVertical: 10,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 15,
    color: "#525252",
  },
  menuTitle: {
    marginVertical: 10,
    fontSize: 18,
    fontWeight: "500",
    letterSpacing: 0.7,
  },
});
