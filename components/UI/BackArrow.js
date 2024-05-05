import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View, Image } from "react-native";

const BackArrow = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <View style={{ marginTop: 40, marginHorizontal: 20 }}>
        <Image
          source={require("../../assets/images/arrow-back.png")}
          style={{ height: 30 }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default BackArrow;
