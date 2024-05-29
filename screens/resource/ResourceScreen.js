import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import BackArrow from "../../components/UI/BackArrow";

const documents = [
  {
    id: "1",
    title: "Catatan Fisika",
    author: "Cak Lontong",
    date: "12 Februari 2022",
    major: "Computer Science",
  },
  // Add more documents as needed
];

const ResourceScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image
        source={require("../../assets/images/document.png")}
        style={styles.documentImage}
      />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.author}</Text>
        <Text style={styles.text}>{item.date}</Text>
        <Text style={styles.text}>{item.major}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <View style={styles.titleContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View>
              <BackArrow />
            </View>
          </TouchableOpacity>
          <Text style={styles.navbarText}>Explore your need</Text>
        </View>
        <TouchableOpacity
          style={styles.uploadButton}
          onPress={() => navigation.navigate("UploadResource")}
        >
          <Image
            source={require("../../assets/images/upload-icon.png")}
            style={styles.uploadIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <Image source="../../assets/images/search.png" />
        <TextInput style={styles.searchText} placeholder="Search" />
      </View>
      <Text style={styles.header}>Documents for you</Text>
      <View style={styles.listContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("ResourceDetail")}>
          <FlatList
            data={documents}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.flatListContent}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ResourceDetail")}>
          <FlatList
            data={documents}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.flatListContent}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  arrow: {
    height: 24,
    width: 24,
  },
  navbar: {
    paddingTop: 40,
    paddingBottom: 20,
    marginLeft: -20,
    marginRight: -20,
    height: 90,
    width: Dimensions.get("window").width,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#A3A3A3",
    alignItems: "center",
  },
  navbarText: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 10,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
  },
  navbarIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
    paddingLeft: 15,
    width: Dimensions.get("window").width - 48,
    height: 40,
    backgroundColor: "#E2E1E1",
    opacity: 1,
    borderRadius: 12,
  },
  searchText: {
    paddingLeft: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  listContainer: {
    borderRadius: 12,
    padding: 10,
    flex: 1,
  },
  flatListContent: {
    paddingBottom: 20,
  },
  card: {
    flexDirection: "row",
    padding: 20,
    backgroundColor: "#eefcff",
    borderRadius: 10,
  },
  documentImage: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
  cardContent: {
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    color: "#555",
  },
  uploadButton: {
    padding: 10,
    marginRight: 20,
  },
  uploadIcon: {
    width: 24,
    height: 24,
  },
});

export default ResourceScreen;
