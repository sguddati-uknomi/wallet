import React from "react";
import { StyleProp, View } from "react-native";
import { styles } from "./Header.styles";

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
  const leftRightFlex = middleComponent ? 1 : 2;
  const middleFlex = middleComponent ? 1 : 0;

  return (
    <View style={[styles.container, headerStyles]}>
      <View
        style={{
          ...styles.sideContainer,
          flex: leftRightFlex,
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
          flex: leftRightFlex,
        }}
      >
        {rightComponent}
      </View>
    </View>
  );
}
