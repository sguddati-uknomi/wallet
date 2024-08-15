import React from "react";
import { Image } from "react-native";
import { IMAGES } from "@/assets/Images";

import { StyleSheet } from "react-native"; // Ensure this import path is correct

export function Logo() {
  return (
    <Image
      style={styles.logo}
      source={IMAGES.uKnomiLogo}
      resizeMode="contain"
    />
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 92,
    height: 52,
  },
});
