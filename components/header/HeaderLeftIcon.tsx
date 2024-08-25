import React from "react";
import { TouchableOpacity, Text, Image, StyleProp } from "react-native";
import { IMAGES } from "@/assets/Images"; // Ensure this import path is correct
import { WEIGHTS, SIZES } from "@/constants/Font";

type HeaderLeftIconProps = {
  text?: string;
  onPress?: () => void;
};

export function HeaderLeftIcon({ text, onPress }: HeaderLeftIconProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.icon} source={IMAGES.icons.leftArrow} />
      {text && <Text style={styles.text}>{text}</Text>}
    </TouchableOpacity>
  );
}

const styles = {
  container: {
    flexDirection: "row",
    alignItems: "center",
    minWidth: 24,
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
  text: {
    fontSize: SIZES.SIZE_19,
    fontWeight: WEIGHTS.BOLD,
  },
} as StyleProp<any>;
