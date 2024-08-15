import { COLORS } from "@/constants/Colors";
import { SIZES } from "@/constants/Font";
import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  ImageSourcePropType,
  TextStyle,
  ViewStyle,
} from "react-native";

interface IconTextProps {
  icon: ImageSourcePropType;
  text: string;
  iconSize?: number;
  textStyle?: TextStyle;
  containerStyle?: ViewStyle;
}

const IconText: React.FC<IconTextProps> = ({
  icon,
  text,
  iconSize = 16,
  textStyle,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Image
        style={{ width: iconSize, height: iconSize }}
        source={icon}
        resizeMode="contain"
      />
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  text: {
    fontSize: SIZES.SIZE_14, // Default font size
    color: COLORS.gray.black, // Default color (faint grey)
  },
});

export default IconText;
