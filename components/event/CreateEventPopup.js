import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const CreateEventPopup = ({ onChange }) => {
  const navigation = useNavigation();

  function toEventScreen() {
    onChange();
    navigation.navigate("Event");
  }

  return (
    <View style={styles.containter}>
      <TouchableOpacity onPress={toEventScreen} style={styles.xButton}>
        <Image source={require("../../assets/images/vector.png")} />
      </TouchableOpacity>
      <Text style={styles.alertHeader}>Your Event has been requested !</Text>
      <Text style={styles.alertSubheader}>
        Note: admin will inform your confirmation
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containter: {
    backgroundColor: "white",
    width: 290,
    height: 121,
  },

  xButton: {
    alignItems: "flex-end",
    paddingRight: 10,
    marginTop: 5,
  },

  alertHeader: {
    paddingTop: 13,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
  },

  alertSubheader: {
    textAlign: "center",
    color: "#90949D",
    fontSize: 10,
  },
});

export default CreateEventPopup;
