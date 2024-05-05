import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";

const Categories = ({ imageUri, location, text }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(location)}>
      <View style={[styles.categoryMenu]}>
        <Image source={imageUri} />
      </View>
      <Text style={styles.categoryText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  categoryMenu: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    backgroundColor: "white",
    borderRadius: 100,
    elevation: 7,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },

  categoryText: {
    paddingTop: 5,
    paddingLeft: 5,
    textAlign: "center",
    fontFamily: "Inter-Regular",
    fontSize: 12,
  },
});

export default Categories;
