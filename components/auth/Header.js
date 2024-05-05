import { StyleSheet, View, Text } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.signInHeader}>Sign In</Text>
      <Text style={styles.welcomeHeader}>Hi, Welcome back!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 150,
  },

  signInHeader: {
    fontSize: 24,
    textAlign: "center",
  },

  welcomeHeader: {
    fontSize: 12,
    textAlign: "center",
    color: "#999090",
  },
});

export default Header;
