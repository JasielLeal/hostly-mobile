import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  variant?: "primary" | "outline" | "ghost";
  label: string;
}

export default function Button({ variant = "primary", label, ...props }: ButtonProps) {
  let buttonClasses = "w-full rounded-xl px-4 py-3 items-center justify-center ";
  let textClasses = "text-sm font-semibold";

  if (variant === "primary") {
    buttonClasses += "bg-primary";
    textClasses += "text-white font-semibold text-textWhite"; 
  } else if (variant === "outline") {
    buttonClasses += "border border-blue-600 bg-transparent";
    textClasses += "text-blue-600";
  } else if (variant === "ghost") {
    buttonClasses += "bg-transparent";
    textClasses += "text-blue-600";
  }

  return (
    <TouchableOpacity className={buttonClasses} {...props}>
      <Text className={textClasses}>{label}</Text>
    </TouchableOpacity>
  );
}
