import { StyleSheet, TouchableOpacity, Image } from "react-native";

const CreateEventButton = () => {
  return (
    <TouchableOpacity>
      <Image
        style={styles.createEvent}
        source={require("../../assets/images/plus-circle.png")}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  createEvent: {
    marginTop: 3,
    marginLeft: 170,
  },
});

export default CreateEventButton;
