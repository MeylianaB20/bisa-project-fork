import { StyleSheet, View, TextInput, Image } from "react-native";

const SearchBar = () => {
  return (
    <View style={styles.input}>
      <Image source={require("../../assets/images/search.png")} />
      <TextInput style={styles.searchText} placeholder="Search" />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    width: 332,
    height: 44,
    backgroundColor: "#F4F3F3",
    borderRadius: 12,
    fontFamily: "Inter-Regular",
  },

  searchText: {
    paddingLeft: 10,
    fontFamily: "Inter-Regular",
  },
});

export default SearchBar;
