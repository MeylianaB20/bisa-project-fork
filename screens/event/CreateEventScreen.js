import { View, Text, StyleSheet } from "react-native";
import NavbarCreateEvent from "../../components/event/NavbarCreateEvent";
import CreateEventTextBox from "../../components/event/CreateEventTextBox";
import EventCalendar from "../../components/event/EventCalendar";
import { ScrollView } from "react-native-gesture-handler";
import CreateEventPoster from "../../components/event/CreateEventPoster";
import SendRequestButton from "../../components/event/SendRequestButton";
import CreateEventDescriptionInput from "../../components/event/CreateEventDescriptionInput";

const CreateEventScreen = () => {
  return (
    <View style={styles.layout}>
      <NavbarCreateEvent />
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <View style={{ paddingTop: 15 }}>
          <CreateEventTextBox
            inputText="Event Title"
            inputDesc="Write your event name here!"
          />
          <CreateEventTextBox
            inputText="Event SubTitle"
            inputDesc="Write the event subtitle here!"
          />
          <CreateEventTextBox
            inputText="Event Host"
            inputDesc="Write the event host here!"
          />
        </View>
        <View>
          <Text style={{ paddingLeft: 10, paddingTop: 20 }}>Event Date</Text>
          <View style={{ alignItems: "center", paddingTop: 15 }}>
            <EventCalendar />
          </View>
        </View>
        <CreateEventPoster />
        <CreateEventDescriptionInput
          inputText="Event Description"
          inputDesc="Write your event description here!"
        />
        <SendRequestButton />
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

export default CreateEventScreen;
