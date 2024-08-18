import {
  Image,
  ImageSourcePropType,
  StyleProp,
  View,
  TouchableOpacity,
} from "react-native";
import IconText from "./IconText";
import { IMAGES } from "@/assets/Images";
import { COLORS } from "@/constants/Colors";
import { SIZES } from "@/constants/Font";

export default function NavigationMenuItem({
  title,
  icon,
  onPress,
  style,
  iconSize = 16,
}: {
  title: string;
  icon?: ImageSourcePropType;
  onPress: () => void;
  style?: StyleProp<any>;
  iconSize?: number;
}) {
  return (
    <View style={{ width: "100%" }}>
      <TouchableOpacity
        style={[
          {
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 16,
            paddingRight: 8,
          },
          style,
        ]}
        onPress={onPress}
      >
        <IconText
          icon={icon}
          text={title}
          iconSize={iconSize}
          textStyle={{ color: COLORS.gray.black, fontSize: SIZES.SIZE_17 }}
        />
        <Image
          style={{ width: 16, height: 16 }}
          source={IMAGES.icons.rightArrow}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
}
