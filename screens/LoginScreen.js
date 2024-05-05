import { StyleSheet, View } from "react-native";
import Header from "../components/auth/Header";
import InputField from "../components/auth/InputField";
import SignInButton from "../components/auth/SignInButton";
import SignInBreaker from "../components/auth/SignInBreaker";
import WindowsLogin from "../components/auth/WindowsLogin";

const LoginScreen = ({ handleUser, user }) => {
  return (
    <View style={styles.layout}>
      <Header />
      <InputField handleUser={handleUser} />
      <SignInButton user={user} />
      <SignInBreaker />
      <WindowsLogin />
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    backgroundColor: "white",
    height: "100%",
  },
});

export default LoginScreen;
