import React from "react";
import { Text, StyleSheet, TextStyle } from "react-native";
import { COLORS } from "@/constants/Colors"; // Adjust import path as needed
import { SIZES, WEIGHTS } from "@/constants/Font"; // Adjust import path as needed

type CommonLinkProps = {
  text: string;
  onPress: () => void;
  color?: string; // Optional color prop for dynamic text color
  style?: TextStyle; // Optional style override
};

const CommonLink = ({
  text,
  onPress,
  color = COLORS.semantic.blue,
  style,
}: CommonLinkProps) => {
  return (
    <Text style={[styles.link, { color }, style]} onPress={onPress}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  link: {
    textAlign: "center",
    fontSize: SIZES.SIZE_14,
    fontWeight: WEIGHTS.REGULAR,
  },
});

export default CommonLink;
