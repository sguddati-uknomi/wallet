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
  mainContentStyle?: ViewStyle;
};

const CommonAppLayout = ({
  children,
  backgroundColor = COLORS.gray.white,
  style,
  header,
  scrollable,
  mainContentStyle,
}: CommonAppLayoutProps) => {
  return (
    <SafeAreaView style={[styles.container, { backgroundColor }, style]}>
      <StatusBar barStyle="dark-content" />
      {header}
      {!scrollable ? (
        <View style={[styles.mainContent, mainContentStyle]}>{children}</View>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={{ flex: 1, backgroundColor }}
        >
          <View
            style={[
              { paddingBottom: 24 },
              styles.mainContent,
              mainContentStyle,
            ]}
          >
            {children}
          </View>
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
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
});

export default CommonAppLayout;
