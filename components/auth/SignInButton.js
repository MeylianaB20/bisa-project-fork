import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";

const SignInButton = ({ user }) => {
  const navigation = useNavigation();

  function signIn() {
    const { email, password } = user;
    if (!email || !password) {
      Alert.alert("please enter both email and password");
      return false;
    }
    if (email == "kenz" && password == "Pass123") {
      navigation.navigate("HomeTabs");
    } else {
      Alert.alert("Invalid email or password");
      return false;
    }
  }

  return (
    <View style={styles.layout}>
      <TouchableOpacity onPress={() => signIn()}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flexDirection: "row",
    justifyContent: "center",
  },

  button: {
    backgroundColor: "#0961F5",
    width: 320,
    height: 43,
    marginTop: 25,
    borderRadius: 16,
    flexDirection: "column",
    justifyContent: "center",
  },

  buttonText: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
});

export default SignInButton;
