import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import BackArrow from "../components/UI/BackArrow";

const ForumScreen = () => {
  return (
    <ScrollView>
      <BackArrow />
      <View style={styles.container}>
        <Text style={styles.text}>Forum</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: Dimensions.get("window").height * 0.9,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default ForumScreen;
