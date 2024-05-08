import { Image, StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const SearchButton = () => {
  return (
    <TouchableOpacity>
      <View>
        <Image
          source={require("../../assets/images/search-button.png")}
          style={styles.search_button_container}
        ></Image>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  search_button_container: {
    width: 30,
    height: 25,
  },
});

export default SearchButton;
