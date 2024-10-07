import { IMAGES } from "@/assets/Images";
import { COLORS } from "@/constants/Colors";
import { TouchableOpacity, View, Text } from "react-native";
import { Image } from "expo-image";

export default function MenuItem({
  imageSource,
  title,
  price,
  onPress,
}: {
  imageSource?: any;
  title: string;
  price: number;
  onPress?: () => {};
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 108,
        minHeight: 186,
        backgroundColor: COLORS.gray.white,
        borderWidth: 1,
        borderRadius: 18,
        borderColor: COLORS.gray.lightGray,
      }}
    >
      {/* image */}
      <View style={{ position: "relative" }}>
        <Image
          style={{
            width: "100%",
            height: 104,
            borderRadius: 18,
            overflow: "hidden",
          }}
          source={imageSource}
          placeholder={IMAGES.noFoodImage}
          contentFit="cover"
        />
        <View
          style={{
            width: 30,
            height: 30,
            backgroundColor: COLORS.primary.uKnomiLogoGreen,
            borderRadius: 24,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            right: 8,
            top: 8,
            zIndex: 2,
          }}
        >
          <Image
            source={IMAGES.icons.go} // You can replace this with a prop if needed
            style={{ width: 24, height: 12 }}
            contentFit="contain"
          />
        </View>
      </View>

      {/* item description */}
      <View style={{ padding: 8, gap: 16, flex: 1 }}>
        <Text style={{ textAlign: "center", flex: 1 }}>{title}</Text>
        <Text style={{ textAlign: "center" }}>${price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
}
