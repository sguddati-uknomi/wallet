import React, { useState, useRef, useEffect } from "react";
import { TouchableOpacity, Animated, StyleSheet } from "react-native";
import { COLORS } from "@/constants/Colors";

const CustomSwitch = ({ value, onValueChange, small = false }: any) => {
  const [isEnabled, setIsEnabled] = useState(value);
  const animatedValue = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isEnabled ? 1 : 0,
      duration: 120,
      useNativeDriver: false,
    }).start();
  }, [animatedValue, isEnabled]);

  const toggleSwitch = () => {
    setIsEnabled((previousState: any) => !previousState);
    onValueChange(!isEnabled);
  };

  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [COLORS.gray.lightGray, COLORS.primary.uKnomiLogoGreen],
  });

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [2, !small ? 24 : 20],
  });

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={toggleSwitch}
      style={!small ? styles.switchContainer : styles.switchContainerSmall}
    >
      <Animated.View style={[styles.switchTrack, { backgroundColor }]}>
        <Animated.View
          style={[
            !small ? styles.switchThumb : styles.switchThumbSmall,
            { transform: [{ translateX }] },
          ]}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    width: 52,
    height: 32,
    padding: 2,
  },
  switchContainerSmall: {
    width: 42,
    height: 28,
    padding: 2,
  },
  switchTrack: {
    flex: 1,
    borderRadius: 16,
    justifyContent: "center",
  },
  switchThumb: {
    width: 24,
    height: 25,
    backgroundColor: COLORS.gray.white,
    borderRadius: 14,
  },
  switchThumbSmall: {
    width: 17,
    height: 18,
    backgroundColor: COLORS.gray.white,
    borderRadius: 48,
  },
});

export default CustomSwitch;
