// import { Text, View } from "../components/Themed";
import { Text, TouchableOpacity } from "react-native";

interface SignUpButtonProps {
  Icon: React.ComponentType;
  text: string;
  className?: string;
  fontClassName?: string;
  onPress?: () => void;
}

const SignUpButton = ({
  Icon,
  text,
  className,
  fontClassName,
  onPress,
}: SignUpButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex flex-row items-center justify-center h-16 gap-1.5 rounded-xl ${className}`}
    >
      <Icon />
      <Text className={`text-btn ${fontClassName}`}>{text}</Text>
    </TouchableOpacity>
  );
};

export default SignUpButton;
