import { View, Text, TextInput, StyleSheet, Dimensions } from "react-native";

const CreateEventTextBox = ({ inputText, inputDesc }) => {
  return (
    <View style={styles.layout}>
      <Text style={{ fontSize: 14 }}>{inputText}</Text>
      <View style={styles.inputBox}>
        <TextInput
          style={{ fontSize: 10 }}
          placeholderTextColor={"#959595"}
          placeholder={inputDesc}
          multiline={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    paddingLeft: Dimensions.get("window").width * 0.04,
    paddingTop: 12,
  },

  inputBox: {
    marginTop: 5,
    paddingTop: 4,
    paddingLeft: 10,
    width: 335,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
  },
});

export default CreateEventTextBox;
