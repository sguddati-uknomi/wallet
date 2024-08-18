import { PropsWithChildren, useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";
import { IMAGES } from "@/assets/Images";

export function Collapsible({
  children,
  title,
  collapsibleContainerStyle,
  titleStyle,
}: PropsWithChildren & {
  title: string;
  collapsibleContainerStyle?: ViewStyle;
  titleStyle?: TextStyle;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View>
      <TouchableOpacity
        style={[styles.heading, collapsibleContainerStyle]}
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}
      >
        <Text style={[styles.title, titleStyle]}>{title}</Text>
        <Image
          style={{ width: 16, height: 16 }}
          source={isOpen ? IMAGES.icons.subtract : IMAGES.icons.darkPlus}
          resizeMode="contain"
        />
      </TouchableOpacity>
      {isOpen && <View style={styles.content}>{children}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 6,
    paddingVertical: 24,
  },
  title: {
    maxWidth: "80%",
  },
  content: {
    paddingLeft: 48,
    paddingRight: 24,
    paddingBottom: 24,
  },
});
