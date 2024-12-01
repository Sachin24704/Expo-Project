import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

type Props = {
  title: string;
  handlePress: () => void;
  containerStyles?: string;
  textStyles?: string;
  isLoading?: boolean;
};

const CustomButton: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity
      onPress={props.handlePress}
      activeOpacity={0.7}
      className={`bg-white rounded-xl p-4 flex justify-center items-center w-full ${props.containerStyles} ${
        props.isLoading ? "opacity-50" : ""
      }`}
      disabled={props.isLoading}
    >
      <Text
        className={`text-[##6D6B6B] font-medium text-base ${props.textStyles}`}
      >
        {props.title}
      </Text>

      {props.isLoading && (
        <ActivityIndicator
          animating={props.isLoading}
          color="#fff"
          size="small"
          className="ml-2"
        />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
