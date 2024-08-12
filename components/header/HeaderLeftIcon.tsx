import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import { styles } from './HeaderLeft.styles'
import { IMAGES } from '@/assets/Images'; // Ensure this import path is correct

type HeaderLeftIconProps = {
  text?: string;
  onPress?: () => void;
};

export function HeaderLeftIcon({ text, onPress }: HeaderLeftIconProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
    >
      <Image
        style={styles.icon}
        source={IMAGES.icons.leftArrow}
      />
      {text && (
        <Text style={styles.text}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
}
