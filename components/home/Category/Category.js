import { StyleSheet, View, Text } from "react-native";
import Categories from "./Categories";

const Category = () => {
  return (
    <View style={styles.layout}>
      <Text style={styles.CategoryText}>Category</Text>
      <View style={styles.flex}>
        <Categories
          imageUri={require("../../../assets/images/mentor.png")}
          location="Mentor"
          text="Mentor"
        />
        <Categories
          imageUri={require("../../../assets/images/event.png")}
          location="Event"
          text="Event"
        />
        <Categories
          imageUri={require("../../../assets/images/resource.png")}
          location="Resource"
          text="Resource"
        />
        <Categories
          imageUri={require("../../../assets/images/forum.png")}
          location="Forum"
          text="Forum"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    paddingTop: 25,
  },

  flex: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  CategoryText: {
    paddingLeft: 20,
    fontFamily: "Inter-Bold",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Category;
