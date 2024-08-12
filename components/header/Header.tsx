import React from 'react';
import { View } from 'react-native';
import { styles } from './Header.styles';

type HeaderProps = {
  leftComponent?: React.ReactNode;
  middleComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
};

export function Header({
  leftComponent,
  middleComponent,
  rightComponent,
}: HeaderProps) {
  const leftRightFlex = middleComponent ? 1 : 2;
  const middleFlex = middleComponent ? 1 : 0;

  return (
    <View style={styles.container}>
      <View style={{ ...styles.sideContainer, flex: leftRightFlex }}>
        {leftComponent}
      </View>
      {middleComponent && (
        <View style={{ ...styles.middleContainer, flex: middleFlex }}>
          {middleComponent}
        </View>
      )}
      <View style={{ ...styles.sideContainer, flex: leftRightFlex }}>
        {rightComponent}
      </View>
    </View>
  );
}
