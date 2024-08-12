import React from "react";
import { StatusBar, StyleSheet, View, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "@/constants/Colors"; // Adjust import path as needed

type CommonAppLayoutProps = {
  children: React.ReactNode;
  backgroundColor?: string; // Optional background color
  style?: ViewStyle; // Optional style for SafeAreaView
};

const CommonAppLayout = ({
  children,
  backgroundColor = COLORS.gray.white,
  style,
}: CommonAppLayoutProps) => {
  return (
    <SafeAreaView style={[styles.container, { backgroundColor }, style]}>
      <StatusBar barStyle="dark-content" />
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 26, // Adjust padding if needed
  },
});

export default CommonAppLayout;
