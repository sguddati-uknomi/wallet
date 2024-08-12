import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { COLORS } from "@/constants/Colors"; // Adjust import path as needed
import { SIZES, WEIGHTS } from "@/constants/Font"; // Adjust import path as needed
import CommonLink from "./CommonLink"; // Adjust import path as needed

type CustomButtonWithLinksProps = {
  text: string;
  onPress: () => void;
  buttonColor?: string; // Allow passing custom button color
  textColor?: string; // Allow passing custom text color
  children?: React.ReactNode; // For passing CommonLink components
  style?: ViewStyle; // Optional style override
};

const CustomButtonWithLinks = ({
  text,
  onPress,
  buttonColor = COLORS.primary.uKnomiLogoGreen, // Default to uKnomiLogoGreen if no color is provided
  textColor = COLORS.gray.black, // Default to white text color
  children,
  style,
}: CustomButtonWithLinksProps) => {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: buttonColor }]}
        onPress={onPress}
      >
        <Text style={[styles.buttonText, { color: textColor }]}>{text}</Text>
      </TouchableOpacity>
      {children && <View style={styles.childrenContainer}>{children}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 24,
    width: "100%",
  },
  button: {
    width: "100%",
    height: 44,
    borderRadius: 60,
    paddingVertical: 7,
    paddingHorizontal: 46,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: SIZES.SIZE_17,
    fontWeight: WEIGHTS.REGULAR,
  },
  linksContainer: {
    marginTop: 24, // Adjust margin as needed
  },
  childrenContainer: {
    gap: 16,
  },
});

export default CustomButtonWithLinks;
