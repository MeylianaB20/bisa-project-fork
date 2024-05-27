import { StyleSheet, View, TouchableOpacity, Text, Dimensions } from "react-native";
import Header from "../../components/auth/Header";
import InputField from "../../components/auth/InputField";
import SignInButton from "../../components/auth/SignInButton";
import SignInBreaker from "../../components/auth/SignInBreaker";
import WindowsLogin from "../../components/auth/WindowsLogin";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = ({ handleUser, user }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.layout}>
      <Header />
      <InputField handleUser={handleUser} />
      <SignInButton user={user} />
      <SignInBreaker />
      <WindowsLogin />
      {/* Ini Tombol biar langsung pergi ke page yang lagi kita develop, ganti2 aja */}
      {/* <TouchableOpacity onPress={() => navigation.navigate('Mentor')} style={styles.developButton}>
        <View style={{justifyContent: "center"}}>
          <Text>Develop</Text>
        </View>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    backgroundColor: "white",
    height: "100%",
  },
  developButton: {
    backgroundColor: "lightblue",
    width: Dimensions.get("window").width - 48,
    height: 43,
    marginTop: 25,
    marginHorizontal: 24,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginScreen;
