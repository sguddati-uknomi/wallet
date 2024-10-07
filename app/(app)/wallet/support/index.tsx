import React from "react";
import { Text, View, Image, Linking } from "react-native";
import { useRouter } from "expo-router";
import { Header } from "@/components/header/Header";
import { IMAGES } from "@/assets/Images"; // Ensure this import path is correct
import { COLORS } from "@/constants/Colors";
import { SIZES, WEIGHTS } from "@/constants/Font"; // Ensure this import path is correct
import CommonAppLayout from "@/components/common/CommonAppLayout";
import CommonInput from "@/components/common/CommonInput";
import NavigationMenuItem from "@/components/common/NavigationMenuItem";
import { ROUTES } from "@/constants/Routes";
import { HeaderLeftIcon } from "@/components/header/HeaderLeftIcon";

const SUPPORT_MENU_ITEMS = [
  {
    title: "FAQ",
    route: ROUTES.SUPPORT_FAQ,
  },
  {
    title: "How uKnomi works",
    route: ROUTES.SUPPORT_UKNOMI,
  },
  {
    title: "How uKnomi Pay works",
    route: ROUTES.SUPPORT_UKNOMI_PAY,
  },
  {
    title: "Privacy Policy",
    route: "https://uknomi.com/privacy/",
  },
];

export default function Support() {
  const router = useRouter();

  const handlePress = (item: any) => {
    if (item.route) {
      router.push(item.route);
    } else if (item.url) {
      Linking.openURL(item.url);
    }
  };

  return (
    <CommonAppLayout
      style={{
        backgroundColor: COLORS.gray.lightGrayBackground,
      }}
      mainContentStyle={{
        backgroundColor: COLORS.gray.white,
        paddingHorizontal: 0,
      }}
      header={
        <Header
          leftComponent={<HeaderLeftIcon onPress={() => router.dismiss()} />}
        />
      }
      scrollable
    >
      <View style={{ paddingHorizontal: 24, marginTop: 24, marginBottom: 48 }}>
        <Image
          style={{ width: 160, height: 124, alignSelf: "center" }}
          source={IMAGES.orderHistory}
          resizeMode="contain"
        />
        <Text
          style={{
            fontSize: SIZES.SIZE_22,
            color: COLORS.gray.black,
            fontWeight: WEIGHTS.BOLD,
            width: "100%",
            textAlign: "center",
            marginTop: 12,
          }}
        >
          Have questions?
        </Text>
        <CommonInput
          placeholder="What are you looking for?"
          value=""
          onChangeText={() => {}}
          icon={IMAGES.icons.support}
          style={{ marginTop: 24 }}
        />
      </View>

      {SUPPORT_MENU_ITEMS.map((item, index) => (
        <NavigationMenuItem
          key={item.title}
          title={item.title}
          onPress={() => handlePress(item)}
          style={{
            borderTopWidth: 1,
            borderColor: COLORS.gray.lightGray,
            paddingLeft: 48,
            paddingRight: 32,
            borderBottomWidth: index === SUPPORT_MENU_ITEMS.length - 1 ? 1 : 0,
          }}
        />
      ))}

      <View
        style={{ paddingHorizontal: 24, marginTop: 48, alignItems: "center" }}
      >
        <Text
          style={{
            fontSize: SIZES.SIZE_14,
            color: COLORS.gray.black,
            width: 280,
            textAlign: "center",
          }}
        >
          Couldn’t find what you’re looking for?{"\n"}
          Please contact us at{"\n"}
          support@uKnomi.com or 000 000 0000
        </Text>
      </View>
    </CommonAppLayout>
  );
}
