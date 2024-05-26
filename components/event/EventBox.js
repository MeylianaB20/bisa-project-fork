import { useNavigation } from "@react-navigation/native";
import { Text, View, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const EventBox = ({ title, date, imageUrl, desc }) => {
  const navigation = useNavigation();

  function toEventDetails() {
    navigation.navigate("EventDetails", {
      eventTitle: title,
      eventDate: date,
      eventImage: imageUrl,
    });
  }

  return (
    <TouchableOpacity onPress={toEventDetails} style={styles.layout}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.eventDate}>{date}</Text>
      <View style={styles.imageLayout}>
        <Image source={imageUrl} />
      </View>
      <Text style={styles.description}>{desc}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  layout: {
    marginTop: 20,
    width: 335,
    height: 330,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "#fff",
    borderRadius: 5,
  },

  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
  },

  eventDate: {
    textAlign: "right",
    paddingTop: 5,
    paddingRight: 20,
    color: "#C2B6B6",
  },

  imageLayout: {
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
  },

  description: {
    fontSize: 12,
    paddingHorizontal: 15,
    paddingTop: 7,
  },
});

export default EventBox;
