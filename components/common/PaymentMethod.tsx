// PaymentMethod.js
import React from "react";
import {
  TouchableOpacity,
  View,
  Image,
  Text,
  ImageSourcePropType,
  StyleProp,
} from "react-native";
import { SIZES, WEIGHTS } from "@/constants/Font"; // Ensure this import path is correct
import { COLORS } from "@/constants/Colors";
import { IMAGES } from "@/assets/Images";

const PaymentMethod = ({
  onPress,
  imageSource,
  title,
  subtitle,
  style,
}: {
  style?: StyleProp<any>;
  onPress?: () => void;
  imageSource?: ImageSourcePropType;
  title?: string;
  subtitle?: string;
}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <View style={styles.row}>
        <Image style={styles.image} source={imageSource} resizeMode="contain" />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
      <Image
        style={styles.icon}
        source={IMAGES.icons.rightArrow}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

const styles = {
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 12,
    backgroundColor: "white",
    shadowColor: "#FFFFFF",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: "center",
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.gray.lightGray,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 6,
  },
  row: {
    flexDirection: "row",
  },
  image: {
    width: 58,
    height: 38,
  },
  textContainer: {
    marginLeft: 12,
  },
  title: {
    fontSize: SIZES.SIZE_17,
    fontWeight: WEIGHTS.BOLD,
  },
  subtitle: {
    fontSize: SIZES.SIZE_12,
    color: COLORS.gray.midGray,
  },
  icon: {
    width: 12,
    height: 12,
  },
} as StyleProp<any>;

export default PaymentMethod;
