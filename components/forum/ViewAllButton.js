import { useNavigation } from "@react-navigation/native";
import { View, Text, Alert, TouchableOpacity, StyleSheet } from "react-native";

function ViewAllButton() {
  const navigation = useNavigation();

  const handlePress = () => {
    Alert.alert("Button Pressed View All");
  };

  return (
    <TouchableOpacity onPress={() => navigation.navigate("HomeTabs")}>
      <Text style={styles.viewAll_Text}>View All</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  viewAll_Text: {
    color: "blue",
    fontSize: 15,
  },
});

export default ViewAllButton;
