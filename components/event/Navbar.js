import { StyleSheet, View, Text, Dimensions } from "react-native";
import BackArrow from "../UI/BackArrow";
import CreateButton from "../UI/CreateButton";

const Navbar = () => {
  return (
    <View style={styles.layout}>
      <BackArrow />
      <Text style={styles.headerText}>Event Page</Text>
      <View style={styles.createEvent}>
        <CreateButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    paddingTop: 60,
    paddingLeft: 15,
    flexDirection: "row",
    width: "100%",
    borderBottomWidth: 1,
    paddingBottom: 15,
  },

  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 20,
  },

  createEvent: {
    marginTop: 3,
    marginLeft: Dimensions.get("window").width * 0.4,
  },
});

export default Navbar;
