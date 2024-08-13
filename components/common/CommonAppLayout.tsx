import React from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "@/constants/Colors"; // Adjust import path as needed

type CommonAppLayoutProps = {
  children: React.ReactNode;
  backgroundColor?: string; // Optional background color
  style?: ViewStyle; // Optional style for SafeAreaView
  header?: React.ReactNode;
  scrollable?: boolean;
};

const CommonAppLayout = ({
  children,
  backgroundColor = COLORS.gray.white,
  style,
  header,
  scrollable,
}: CommonAppLayoutProps) => {
  return (
    <SafeAreaView style={[styles.container, { backgroundColor }, style]}>
      <StatusBar barStyle="dark-content" />
      {header}
      {!scrollable ? (
        <View style={styles.mainContent}>{children}</View>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={styles.mainContent}
        >
          <View style={{ paddingBottom: 56 }}>{children}</View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContent: {
    flex: 1,
    padding: 24,
  },
});

export default CommonAppLayout;
