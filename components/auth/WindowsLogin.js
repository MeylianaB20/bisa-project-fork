import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

const WindowsLogin = () => {
  return (
    <View style={styles.layout}>
      <TouchableOpacity
        onPress={() => signInWithMicrosoft()}
        style={styles.touchLayout}
      >
        <Image
          style={styles.windowsImage}
          source={require("../../assets/images/windows.png")}
        />
        <Text style={styles.signInWithMicrosoftText}>
          Sign In with Microsoft
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flexDirection: "row",
    justifyContent: "center",
  },

  touchLayout: {
    width: 320,
    height: 43,
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    borderColor: "#C6C6C6",
    borderWidth: 1,
  },

  windowsImage: {
    width: 33,
    height: 33,
  },

  signInWithMicrosoftText: {
    color: "#999090",
    paddingLeft: 20,
  },
});

export default WindowsLogin;
