import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Dimensions,
  TouchableOpacity,
  Modal,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import BackArrow from "../../components/UI/BackArrow";
import { useNavigation } from "@react-navigation/native";

const UploadScreen = () => {
  const [title, setTitle] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [authorMajor, setAuthorMajor] = useState("");
  const [file, setFile] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();

  const handleFileChange = () => {
    // Implement file picker logic here
  };

  const handleSubmit = () => {
    // Implement submit logic here
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={styles.arrow}>
        <BackArrow />
      </View>
      <View style={styles.container}>
        <Text style={styles.headerText}>Upload Resources</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            placeholder="Write the title of this resource"
            value={title}
            onChangeText={setTitle}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Author Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Write the author name of this resource"
            value={authorName}
            onChangeText={setAuthorName}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Author Major</Text>
          <TextInput
            style={styles.input}
            placeholder="Write the author major of this resource"
            value={authorMajor}
            onChangeText={setAuthorMajor}
          />
        </View>

        <View style={styles.fileUpload}>
          <Text style={styles.fileText}>Upload Supported File</Text>
          <TouchableOpacity
            style={styles.fileButton}
            onPress={handleFileChange}
          >
            <Text style={styles.fileButtonText}>
              {file ? file.name : "Catatan Fisika"}
            </Text>
          </TouchableOpacity>
        </View>

        <Button title="Post Resource" onPress={handleSubmit} />

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text>Your Resource Successfully Posted</Text>
              <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
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
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    height: Dimensions.get("window").height,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  fileUpload: {
    width: "100%",
    padding: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginVertical: 10,
    alignItems: "center",
  },
  fileText: {
    marginBottom: 10,
  },
  fileButton: {
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  fileButtonText: {
    color: "#007bff",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#007bff",
    borderRadius: 5,
  },
  closeButtonText: {
    color: "white",
  },
});

export default UploadScreen;
