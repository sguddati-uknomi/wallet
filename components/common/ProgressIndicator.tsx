import React from "react";
import { View, StyleSheet } from "react-native";

type ProgressIndicatorProps = {
  stepsCompleted: number; // Number of steps completed (e.g., 1, 2, or 3)
  totalSteps?: number; // Total number of steps (e.g., 3, 4, etc.)
};

const ProgressIndicator = ({
  stepsCompleted,
  totalSteps = 3,
}: ProgressIndicatorProps) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.circle,
            index < stepsCompleted ? styles.completed : styles.incomplete,
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20, // Adjust as needed
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  completed: {
    backgroundColor: "black", // Color for completed steps
  },
  incomplete: {
    backgroundColor: "lightgray", // Color for incomplete steps
  },
});

export default ProgressIndicator;
