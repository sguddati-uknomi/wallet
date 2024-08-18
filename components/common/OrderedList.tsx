import React from "react";
import { View, Text, StyleSheet, ViewStyle } from "react-native";
import { COLORS } from "@/constants/Colors"; // Ensure this import path is correct

const OrderedList = ({
  children,
  listStyle,
}: {
  children: any;
  listStyle?: ViewStyle;
}) => {
  // Clone the children and add index to each one
  const items = React.Children.map(children, (child, index) =>
    React.cloneElement(child, { index: index + 1 })
  );

  return <View style={[styles.listStyle, listStyle]}>{items}</View>;
};

const ListItem = ({
  index,
  children,
}: {
  index?: number;
  children?: React.ReactNode;
}) => (
  <View style={styles.itemContainer}>
    <Text style={styles.indexText}>{index}.</Text>
    {children}
  </View>
);

const styles = StyleSheet.create({
  listStyle: {
    gap: 16,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
  },
  indexText: {
    color: COLORS.gray.black,
  },
  itemText: {
    flex: 1,
    flexWrap: "wrap",
    color: COLORS.gray.black,
  },
});

export { OrderedList, ListItem };
