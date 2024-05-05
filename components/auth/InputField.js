import { StyleSheet, View } from "react-native";
import Textbox from "./Textbox.js";

const InputField = ({ handleUser }) => {
  return (
    <View style={styles.layout}>
      <Textbox
        text="Email"
        secure={false}
        type="email"
        handleUser={handleUser}
        value="example@binus.ac.id"
      />
      <Textbox
        text="Password"
        secure={true}
        type="password"
        handleUser={handleUser}
        value="********************"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    paddingTop: 35,
  },
});

export default InputField;
