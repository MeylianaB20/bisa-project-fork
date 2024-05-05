import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.layout}>
      <Text style={styles.helloText}>Hello, Kenzie!</Text>
      <Text style={styles.subText}>What do you need today?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    paddingTop: 50,
    paddingLeft: 20,
  },

  helloText: {
    fontSize: 24,
    fontWeight: "bold",
  },

  subText: {
    fontSize: 12,
    color: "#949494",
  },
});

export default Header;
