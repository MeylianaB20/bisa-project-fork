import { View, Text, Image, StyleSheet } from "react-native";

const EventDetails = () => {
  return (
    <View style={styles.container}>
      <Text>Tech Event</Text>
      <Text>[Tech Event yang harus dikunjungi oleh Mahasiswa]</Text>
      <View></View>
      <Image />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
});

export default EventDetails;
