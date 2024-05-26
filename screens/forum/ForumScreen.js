import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import BackArrow from "../../components/UI/BackArrow";
import SearchButton from "../../components/forum/SearchButton";

const ForumScreen = () => {
  return (
    <ScrollView>
      <View style={styles.arrow}></View>
      <View style={styles.container}>
        <View style={styles.header_container}>
          <View style={styles.back_arrow_container}>
            <BackArrow />
          </View>

          <View style={styles.discover_container}>
            <Text style={styles.discover_text}>D I S C O V E R</Text>
          </View>

          <View style={styles.search_button}>
            {/* <Image
              source={require("../../assets/images/search-button.png")}
              style={styles.search_button_container}
            ></Image> */}
            <SearchButton />
          </View>
        </View>

        <View>
          <View style={styles.categories_title_container}>
            <View>
              <Text style={styles.categories_text}>Categories</Text>
            </View>
            <View style={styles.viewall_text}>
              <Text>View All</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  arrow: {
    paddingTop: 50,
    paddingLeft: 10,
  },

  container: {
    display: "flex",
    flexDirection: "column",
  },

  header_container: {
    marginTop: 80,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    position: "relative",
  },

  discover_container: {
    alignItems: "center",
  },

  discover_text: {
    fontWeight: "bold",
    alignContent: "center",
    fontSize: 27,
    alignContent: "center",
  },

  back_arrow_container: {
    height: 25,
  },

  categories_text: {
    fontWeight: "bold",
    fontSize: 20,
    paddingLeft: 20,
  },

  viewall_text: {
    marginVertical: 5,
    paddingRight: 10,
  },

  categories_title_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
});

export default ForumScreen;
