import { StyleSheet, View, Text } from "react-native";

const SignInBreaker = () => {
  return (
    <View style={styles.layout}>
      <View style={styles.line}></View>
      <Text style={styles.text}>or sign up with</Text>
      <View style={styles.line}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    paddingTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  line: {
    width: 107,
    height: 1,
    backgroundColor: "#999090",
  },

  text: {
    width: 105,
    textAlign: "center",
    color: "#999090",
  },
});

export default SignInBreaker;
