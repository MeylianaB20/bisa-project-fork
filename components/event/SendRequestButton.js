import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const SendRequestButton = () => {
  return (
    <View style={{ alignItems: "center", marginTop: 20 }}>
      <TouchableOpacity style={styles.layout}>
        <Text style={styles.sendRequestText}>Send Request</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    width: 119,
    height: 30,
    backgroundColor: "#1C61C7",
    justifyContent: "center",
  },

  sendRequestText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default SendRequestButton;
