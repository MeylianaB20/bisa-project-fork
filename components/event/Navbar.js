import { StyleSheet, View, Text } from "react-native";
import BackArrow from "../UI/BackArrow";
import CreateEventButton from "./CreateEventButton";

const Navbar = () => {
  return (
    <View style={styles.layout}>
      <BackArrow />
      <Text style={styles.headerText}>Event Page</Text>
      <CreateEventButton />
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
});

export default Navbar;
