import React from "react";
import { TouchableOpacity, View } from "react-native";

interface RadioButtonProps {
  selected: boolean;
  onPress: () => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({ selected, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="w-6 h-6  bg-input rounded-md flex items-center justify-center"
    >
      {selected && <View className="w-3 h-3 bg-primary rounded-sm" />}
    </TouchableOpacity>
  );
};

export default RadioButton;
