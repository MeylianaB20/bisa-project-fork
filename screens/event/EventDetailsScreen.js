import { View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import NavbarEventDetails from "../../components/event/NavbarEventDetails";
import EventDetails from "../../components/event/EventDetails";
import { useRoute } from "@react-navigation/native";

const EventDetailsScreen = () => {
  const route = useRoute();
  const { eventDate } = route.params;
  const { eventTitle } = route.params;
  const { eventImage } = route.params;

  return (
    <View style={styles.layout}>
      <NavbarEventDetails />
      <ScrollView>
        <EventDetails
          eventTitle={eventTitle}
          eventDate={eventDate}
          eventImage={eventImage}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default EventDetailsScreen;
