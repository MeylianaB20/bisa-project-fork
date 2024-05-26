import { TouchableOpacity, Image } from "react-native";

const CreateButton = () => {
  return (
    <TouchableOpacity>
      <Image source={require("../../assets/images/plus-circle.png")} />
    </TouchableOpacity>
  );
};

export default CreateButton;
