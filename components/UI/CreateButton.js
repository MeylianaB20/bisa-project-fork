import { TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CreateButton = ({ stack }) => {
  const navigation = useNavigation();

  function toCreate() {
    navigation.navigate(stack);
  }

  return (
    <TouchableOpacity onPress={toCreate}>
      <Image source={require("../../assets/images/plus-circle.png")} />
    </TouchableOpacity>
  );
};

export default CreateButton;
