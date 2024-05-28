import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import Navbar from "../../components/event/Navbar";
import SearchBar from "../../components/event/SearchBar";
import EventBox from "../../components/event/EventBox";
import { ScrollView } from "react-native-gesture-handler";

const EventScreen = () => {
  return (
    <View style={styles.backgroundLayout}>
      <Navbar />
      <View style={styles.layout}>
        <SearchBar />
        <View style={styles.eventBlock}>
          <Text style={styles.eventText}>Events</Text>
          <View style={styles.line} />
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewLayout}>
        <EventBox
          title="Tech Event"
          date="15 Maret 2024"
          imageUrl={require("../../assets/images/event-image.png")}
          desc="Event yang diadakan oleh salah satu UKM di Universitas Bina Nusantara.
          Bertema tekonologi dan inovasi. Event ini berisi tentang Talkshow dan
          berbagai teknologi-teknologi baru yang telah dikembangkan sehingga
          mahasiswa Bina Nusantara tetap terupdate..."
        />
        <EventBox
          title="Tech Event"
          date="15 Maret 2024"
          imageUrl={require("../../assets/images/event-image.png")}
          desc="Event yang diadakan oleh salah satu UKM di Universitas Bina Nusantara.
          Bertema tekonologi dan inovasi. Event ini berisi tentang Talkshow dan
          berbagai teknologi-teknologi baru yang telah dikembangkan sehingga
          mahasiswa Bina Nusantara tetap terupdate..."
        />
        <EventBox
          title="Tech Event"
          date="15 Maret 2024"
          imageUrl={require("../../assets/images/event-image.png")}
          desc="Event yang diadakan oleh salah satu UKM di Universitas Bina Nusantara.
          Bertema tekonologi dan inovasi. Event ini berisi tentang Talkshow dan
          berbagai teknologi-teknologi baru yang telah dikembangkan sehingga
          mahasiswa Bina Nusantara tetap terupdate..."
        />
        <EventBox
          title="Tech Event"
          date="15 Maret 2024"
          imageUrl={require("../../assets/images/event-image.png")}
          desc="Event yang diadakan oleh salah satu UKM di Universitas Bina Nusantara.
          Bertema tekonologi dan inovasi. Event ini berisi tentang Talkshow dan
          berbagai teknologi-teknologi baru yang telah dikembangkan sehingga
          mahasiswa Bina Nusantara tetap terupdate..."
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundLayout: {
    flex: 1,
    backgroundColor: "white",
  },

  layout: {
    height: 100,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: 20,
  },

  eventText: {
    paddingTop: 2,
    fontSize: 16,
    color: "#1C61C7",
    textAlign: "center",
    fontFamily: "Inter-Regular",
  },

  line: {
    paddingTop: 10,
    borderBottomColor: "#1C61C7",
    borderBottomWidth: 3,
    width: 330,
  },

  scrollViewLayout: {
    flexGrow: 1,
    alignItems: "center",
    paddingBottom: 40,
  },
});

export default EventScreen;
