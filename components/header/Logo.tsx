import React from "react";
import { Image } from "react-native";
import { styles } from "./Logo.styles";
import { IMAGES } from "@/assets/Images"; // Ensure this import path is correct

export function Logo() {
  return (
    <Image
      style={styles.logo}
      source={IMAGES.uKnomiLogo}
      resizeMode="contain"
    />
  );
}
