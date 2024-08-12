import React from "react";
import { View, Image, Text, StyleSheet, StyleProp } from "react-native";
import { IMAGES } from "@/assets/Images"; // Adjust the import path as needed
import { SIZES, WEIGHTS } from "@/constants/Font"; // Adjust the import path as needed
import ProgressIndicator from "@/components/common/ProgressIndicator"; // Adjust the import path as needed
import PageTitleSection from "../common/CommonPageTitleSection";

type OnboardingStepProps = {
  title: string;
  description: string;
  stepsCompleted: number;
};

const OnboardingStep = ({
  title,
  description,
  stepsCompleted,
}: OnboardingStepProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={IMAGES.onboarding}
          resizeMode="contain"
        />
        <ProgressIndicator stepsCompleted={stepsCompleted} />
      </View>
      <PageTitleSection title={title} description={description} />
    </View>
  );
};

const styles = {
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 36, // Added margin to separate image from text
  },
  image: {
    width: 290,
    height: 268,
  },
} as StyleProp<any>;

export default OnboardingStep;
