import React from "react";
import { View, Text, StyleProp, TextStyle, ViewStyle } from "react-native";
import { SIZES, WEIGHTS } from "@/constants/Font"; // Adjust import path as needed

type PageTitleSectionProps = {
  title: string;
  description?: string;
  titleStyle?: StyleProp<TextStyle>; // Optional style for the title
  descriptionStyle?: StyleProp<TextStyle>; // Optional style for the description
  containerStyle?: StyleProp<ViewStyle>; // Optional style for the container
};

const PageTitleSection = ({
  title,
  description,
  titleStyle,
  descriptionStyle,
  containerStyle,
}: PageTitleSectionProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      {description && (
        <Text style={[styles.description, descriptionStyle]}>
          {description}
        </Text>
      )}
    </View>
  );
};

const styles = {
  container: {
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: SIZES.SIZE_28,
    fontWeight: WEIGHTS.BOLD,
    textAlign: "center",
    marginBottom: 8,
    maxWidth: 276,
    fontColor: "#000000",
  },
  description: {
    fontSize: SIZES.SIZE_17,
    fontWeight: WEIGHTS.REGULAR,
    textAlign: "center",
    maxWidth: 256,
    fontColor: "#000000",
  },
} as StyleProp<any>;

export default PageTitleSection;
