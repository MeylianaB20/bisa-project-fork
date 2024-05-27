import { View, Image, Text, StyleSheet } from "react-native";

const EventInfo = ({ imageUrl, info }) => {
  return (
    <View style={styles.layout}>
      <Image style={{ marginTop: 2 }} source={imageUrl} />
      <Text style={styles.textInfo}>{info}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flexDirection: "row",
  },

  textInfo: {
    fontSize: 13,
    color: "#C2B6B6",
    fontWeight: "bold",
    paddingLeft: 7,
  },
});

export default EventInfo;
