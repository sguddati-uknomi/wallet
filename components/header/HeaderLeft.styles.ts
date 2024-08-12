import { StyleProp } from "react-native";
import { SIZES, WEIGHTS } from "@/constants/Font"; // Ensure this import path is correct

export const styles = {
  container: {
    position: "absolute",
    top: 8,
    left: 0,
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
