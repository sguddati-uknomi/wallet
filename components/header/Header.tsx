import React from "react";
import { StyleProp, View } from "react-native";
import { StyleSheet } from "react-native";

type HeaderProps = {
  leftComponent?: React.ReactNode;
  middleComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  headerStyles?: StyleProp<any>;
};

export function Header({
  leftComponent,
  middleComponent,
  rightComponent,
  headerStyles,
}: HeaderProps) {
  const leftFlex = middleComponent ? 1 : 3;
  const middleFlex = middleComponent ? 1 : 0;
  const rightFlex = middleComponent ? 1 : rightComponent ? 2 : 0;

  return (
    <View style={[styles.container, headerStyles]}>
      <View
        style={{
          ...styles.sideContainer,
          flex: leftFlex,
        }}
      >
        {leftComponent}
      </View>
      {middleComponent && (
        <View
          style={{
            ...styles.middleContainer,
            flex: middleFlex,
          }}
        >
          {middleComponent}
        </View>
      )}
      <View
        style={{
          ...styles.rightContainer,
          flex: rightFlex,
        }}
      >
        {rightComponent}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    justifyContent: "center",
  },
  middleContainer: {
    alignItems: "center",
  },
  rightContainer: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
});
