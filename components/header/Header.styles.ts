import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    minHeight: 52,
    paddingTop: 8,
    paddingBottom: 8,
    paddingHorizontal: 26,
  },
  sideContainer: {
    alignItems: "flex-start",
  },
  middleContainer: {
    alignItems: "center",
  },
  rightContainer: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
});
