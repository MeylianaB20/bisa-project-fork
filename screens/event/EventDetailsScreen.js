import { View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import NavbarEventDetails from "../../components/event/NavbarEventDetails";
import EventDetails from "../../components/event/EventDetails";

const EventDetailsScreen = () => {
  return (
    <View>
      <NavbarEventDetails />
      <ScrollView>
        <EventDetails />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    backgroundColor: "white",
  },
});

export default EventDetailsScreen;
