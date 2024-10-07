import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Header } from "@/components/header/Header";
import { IMAGES } from "@/assets/Images"; // Ensure this import path is correct
import { COLORS } from "@/constants/Colors";
import CommonAppLayout from "@/components/common/CommonAppLayout";
import { ROUTES } from "@/constants/Routes";
import { HeaderLeftIcon } from "@/components/header/HeaderLeftIcon";
import NavigationMenuItem from "@/components/common/NavigationMenuItem";
import CommonLink from "@/components/common/CommonLink";
import { Image } from "expo-image";
import { SIZES, WEIGHTS } from "@/constants/Font";
import { useContext } from "react";
import { UserAppStateContext } from "@/contexts/MockAppState";

export default function Account() {
  const router = useRouter();
  const { mockAppState } = useContext(UserAppStateContext);

  const ACCOUNT_MENU_ITEMS = [
    // {
    //   title: "Profile",
    //   icon: IMAGES.icons.lightProfile,
    //   route: ROUTES.ACCOUNT_PROFILE,
    // },
    // {
    //   title: "Registered Cars",
    //   icon: IMAGES.icons.lightCar,
    //   route: ROUTES.REGISTERED_CARS,
    // },
    // {
    //   title: "Payment Methods",
    //   icon: IMAGES.icons.lightPaymentMethod,
    //   route: ROUTES.ACCOUNT_PAYMENT_METHODS,
    // },
    {
      title: `Deposit - Balance $${mockAppState?.uKnomiBalance}`,
      icon: IMAGES.icons.lightHistory,
      route: "/wallet/payment-options",
    },
    // {
    //   title: "Favorite Menu Items",
    //   icon: IMAGES.icons.lightHeart,
    //   route: ROUTES.ACCOUNT_FAVORITE_MENU_ITEMS,
    // },
    // {
    //   title: "Favorite Locations",
    //   icon: IMAGES.icons.lightLocation,
    //   route: ROUTES.ACCOUNT_FAVORITE_LOCATIONS,
    // },
    // {
    //   title: "Terms and Conditions",
    //   icon: IMAGES.icons.lightTAndC,
    //   route: ROUTES.TERMS_AND_CONDITIONS,
    // },
    // {
    //   title: "Support",
    //   icon: IMAGES.icons.lightSupport,
    //   route: ROUTES.SUPPORT,
    // },
    // {
    //   title: "Settings",
    //   icon: IMAGES.icons.lightSettings,
    //   route: ROUTES.ACCOUNT_SETTINGS,
    // },
    // {
    //   title: "Delete Account",
    //   icon: IMAGES.icons.lightDeleteAccount,
    //   route: ROUTES.ACCOUNT_DELETE,
    // },
  ];

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
          rightComponent={
            <CommonLink
              text="Sign Out"
              onPress={() => {
                router.dismissAll();
                router.replace(ROUTES.ONBOARDING_WELCOME);
              }}
            />
          }
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
        <View
          style={{
            width: "100%",
            position: "relative",
            marginBottom: 28,
          }}
        >
          <View
            style={{
              height: 108,
              position: "relative",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 16,
            }}
          >
            <Image
              style={{ width: 108, height: 108, zIndex: 1 }}
              contentFit="contain"
              source={require("@/assets/images/image copy.png")}
            />
            <View
              style={{
                zIndex: 1,
                width: 93,
                height: 93,
                position: "absolute",
                borderRadius: 64,
                left: 8,
                top: 3,
              }}
            >
              <Image
                source={
                  "https://yt3.googleusercontent.com/ytc/AIdro_mrGUhf9VVrVgG__ENuK9UJiaJm8s7uHiLoo0pr_9uvbXo=s900-c-k-c0x00ffffff-no-rj"
                }
                style={{ width: "100%", height: "100%", borderRadius: 64 }}
                contentFit="cover"
              />
            </View>
            <Text
              style={{
                fontSize: SIZES.SIZE_17,
                fontWeight: WEIGHTS.BOLD,
                width: 200,
              }}
            >
              Srinivas Guddati
            </Text>
          </View>
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
                  padding: 2,
                  minWidth: 16,
                  aspectRatio: 1,
                  borderRadius: 16,
                  backgroundColor: COLORS.primary.uKnomiLogoGreen,
                  position: "absolute",
                  zIndex: 2,
                  right: -4,
                  top: -8,
                  justifyContent: "center",
                  alignItems: "center", // Center the content inside the circle
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 8,
                    color: COLORS.gray.white,
                  }}
                >
                  3
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
