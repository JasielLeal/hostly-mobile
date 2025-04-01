import { forwardRef } from "react";
import { TextInput, View, Text, TextInputProps } from "react-native";

interface InputProps extends TextInputProps {
  label?: string;
}

const Input = forwardRef<TextInput, InputProps>(({ label, placeholder, ...props }, ref) => {
  return (
    <View className="w-full"> 
      
      <View className="w-full rounded-xl bg-input">
        <TextInput
          ref={ref}
          className="w-full px-4 py-2 text-gray-900"
          placeholder={placeholder}
          {...props}
        />
      </View>
    </View>
  );
});

export default Input;
