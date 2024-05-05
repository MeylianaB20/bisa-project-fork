import { StyleSheet, Text, TextInput, View } from "react-native";

const Textbox = ({ text, secure, type, handleUser, value }) => {
  return (
    <View style={styles.layout}>
      <View>
        <Text style={styles.textInput}>{text}</Text>
        <TextInput
          style={styles.inputBox}
          secureTextEntry={secure}
          onChangeText={(input) => handleUser(type, input)}
          placeholder={value}
          placeholderTextColor={"#909091"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flexDirection: "row",
    justifyContent: "center",
  },

  textInput: {
    fontSize: 12,
    marginBottom: 5,
    paddingTop: 7,
  },

  inputBox: {
    backgroundColor: "#F4F6F9",
    width: 320,
    height: 43,
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default Textbox;
