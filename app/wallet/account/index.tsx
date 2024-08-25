import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Header } from "@/components/header/Header";
import { IMAGES } from "@/assets/Images"; // Ensure this import path is correct
import { COLORS } from "@/constants/Colors";
import CommonAppLayout from "@/components/common/CommonAppLayout";
import { ROUTES } from "@/constants/Routes";
import { HeaderLeftIcon } from "@/components/header/HeaderLeftIcon";
import NavigationMenuItem from "@/components/common/NavigationMenuItem";
import CommonLink from "@/components/common/CommonLink";

const ACCOUNT_MENU_ITEMS = [
  {
    title: "Profile",
    icon: IMAGES.icons.lightProfile,
    route: ROUTES.ACCOUNT_PROFILE,
  },
  {
    title: "Registered Cars",
    icon: IMAGES.icons.lightCar,
    route: ROUTES.REGISTERED_CARS,
  },
  {
    title: "Payment Methods",
    icon: IMAGES.icons.lightPaymentMethod,
    route: ROUTES.ACCOUNT_PAYMENT_METHODS,
  },
  {
    title: "Favorite Menu Items",
    icon: IMAGES.icons.lightHeart,
    route: ROUTES.ACCOUNT_FAVORITE_MENU_ITEMS,
  },
  {
    title: "Favorite Locations",
    icon: IMAGES.icons.lightLocation,
    route: ROUTES.ACCOUNT_FAVORITE_LOCATIONS,
  },
  {
    title: "Terms and Conditions",
    icon: IMAGES.icons.lightTAndC,
    route: ROUTES.TERMS_AND_CONDITIONS,
  },
  {
    title: "Support",
    icon: IMAGES.icons.lightSupport,
    route: ROUTES.SUPPORT,
  },
  {
    title: "Settings",
    icon: IMAGES.icons.lightSettings,
    route: ROUTES.ACCOUNT_SETTINGS,
  },
  {
    title: "Delete Account",
    icon: IMAGES.icons.lightDeleteAccount,
    route: ROUTES.ACCOUNT_DELETE,
  },
];

export default function Account() {
  const router = useRouter();

  return (
    <CommonAppLayout
      style={{
        backgroundColor: COLORS.gray.lightGrayBackground,
      }}
      mainContentStyle={{
        backgroundColor: COLORS.gray.white,
      }}
      header={
        <Header
          leftComponent={
            <HeaderLeftIcon text="Wallet" onPress={() => router.dismiss()} />
          }
          rightComponent={<CommonLink text="Sign Out" onPress={() => {}} />}
        />
      }
      scrollable
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <View style={{ width: "100%", height: 100, position: "relative" }}>
          <TouchableOpacity
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              zIndex: 2,
            }}
            onPress={() => router.push(ROUTES.WALLET_NOTIFICATIONS)}
          >
            <View style={{ position: "relative" }}>
              <View
                style={{
                  minWidth: 16,
                  minHeight: 16,
                  borderRadius: 16,
                  backgroundColor: COLORS.primary.uKnomiLogoGreen,
                  position: "absolute",
                  zIndex: 2,
                  right: 0,
                  top: -4,
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 8,
                    color: COLORS.gray.white,
                  }}
                >
                  37
                </Text>
              </View>
              <Image
                source={IMAGES.icons.lightBell}
                style={{ width: 24, height: 24 }}
              />
            </View>
          </TouchableOpacity>
        </View>
        {ACCOUNT_MENU_ITEMS.map((item) => {
          return (
            <NavigationMenuItem
              key={item.title}
              title={item.title}
              icon={item.icon}
              iconSize={20}
              onPress={() => router.push(item.route)}
            />
          );
        })}
      </View>
    </CommonAppLayout>
  );
}
