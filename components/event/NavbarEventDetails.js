import { StyleSheet, View, Text, Dimensions } from "react-native";
import BackArrow from "../UI/BackArrow";

const NavbarEventDetails = () => {
  return (
    <View style={styles.layout}>
      <BackArrow />
      <Text style={styles.headerText}>Event Details</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    backgroundColor: "white",
    paddingTop: 65,
    paddingLeft: 15,
    flexDirection: "row",
    width: Dimensions.get("window").width,
    paddingBottom: 15,
    shadowColor: "#000",
    elevation: 2,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    zIndex: 1000,
  },

  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 20,
  },
});

export default NavbarEventDetails;
