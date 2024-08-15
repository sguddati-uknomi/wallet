import React, { useState } from "react";
import {
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
  TextInputProps,
  StyleProp,
  ImageSourcePropType,
} from "react-native";
import { COLORS } from "@/constants/Colors"; // Adjust import path as needed
import { SIZES, WEIGHTS } from "@/constants/Font"; // Adjust import path as needed
import { IMAGES } from "@/assets/Images"; // Import the images

type CustomInputProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  isPassword?: boolean;
  inputBackgroundColor?: string;
  inputTextColor?: string;
  icon?: ImageSourcePropType;
  style?: StyleProp<any>;
  isMinimalistic?: boolean; // Toggle between normal and minimalistic style
  label?: string; // Label for the minimalistic style
  labelStyle?: StyleProp<any>;
  placeholderTextColor?: string;
} & TextInputProps;

const CustomInput = ({
  value,
  onChangeText,
  placeholder = "Enter text",
  isPassword = false,
  inputBackgroundColor = COLORS.darkMode.darkGreen,
  inputTextColor = COLORS.gray.white,
  icon,
  style,
  isMinimalistic = false,
  label,
  labelStyle,
  placeholderTextColor,
  ...rest
}: CustomInputProps) => {
  const [isTextVisible, setIsTextVisible] = useState(!isPassword);

  const togglePasswordVisibility = () => {
    setIsTextVisible(!isTextVisible);
  };

  return (
    <View
      style={[
        isMinimalistic ? styles.minimalisticContainer : styles.container,
        style,
        { backgroundColor: inputBackgroundColor },
      ]}
    >
      {isMinimalistic && label && (
        <Text style={[styles.label, labelStyle]}>{label}</Text>
      )}
      <View
        style={[
          styles.inputWrapper,
          {
            backgroundColor: inputBackgroundColor,
            paddingHorizontal: !isMinimalistic ? 15 : null,
          },
        ]}
      >
        {icon && (
          <Image source={icon} style={styles.icon} resizeMode="contain" />
        )}
        <TextInput
          style={[
            styles.input,
            {
              color: inputTextColor,
              backgroundColor: inputBackgroundColor,
            },
            icon ? { paddingLeft: 12 } : null,
          ]}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor ?? COLORS.loyalty.silver}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isPassword && !isTextVisible}
          autoCapitalize="none"
          {...rest}
        />
        {isPassword && (
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Image
              source={
                isTextVisible
                  ? IMAGES.icons.lightVisible
                  : IMAGES.icons.lightInvisible
              }
              style={styles.toggleIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles: StyleProp<any> = {
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderRadius: 60,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  minimalisticContainer: {
    width: "100%",
    marginBottom: 10,
    borderRadius: 0,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.gray.midGray,
  },
  label: {
    fontSize: SIZES.SIZE_14,
    color: COLORS.loyalty.silver,
    fontWeight: WEIGHTS.REGULAR,
    marginBottom: 5,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 60,
    backgroundColor: COLORS.darkMode.darkGreen,
    width: "100%",
  },
  icon: {
    width: 20,
    height: 20,
  },
  input: {
    flex: 1,
    height: 44,
    borderRadius: 60,
    paddingVertical: 7,
    fontSize: SIZES.SIZE_17,
    justifyContent: "center",
    alignItems: "center",
    width: "98%",
  },
  toggleIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
    marginRight: 8,
  },
};

export default CustomInput;
