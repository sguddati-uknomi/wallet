import React from "react";
import { Text, Image, View } from "react-native";
import { useRouter } from "expo-router";
import { Header } from "@/components/header/Header";
import { IMAGES } from "@/assets/Images"; // Ensure this import path is correct
import { COLORS } from "@/constants/Colors";
import { SIZES, WEIGHTS } from "@/constants/Font"; // Ensure this import path is correct
import CommonAppLayout from "@/components/common/CommonAppLayout";
import CommonLink from "@/components/common/CommonLink";
import CommonButtonWithLinks from "@/components/common/CommonButtonWithLinks";
import { ROUTES } from "@/constants/Routes";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <CommonAppLayout
      header={
        <Header
          leftComponent={
            <Text
              style={{
                fontSize: SIZES.SIZE_34,
                fontWeight: WEIGHTS.BOLD,
              }}
            >
              Wallet
            </Text>
          }
          rightComponent={
            <Image
              style={{
                alignSelf: "flex-end",
                justifyContent: "center",
                height: 16,
                width: 16,
                resizeMode: "contain",
              }}
              source={IMAGES.icons.darkProfile}
            />
          }
        />
      }
      scrollable
    >
      <View
        style={{
          gap: 24,
        }}
      >
        <View
          style={{
            height: 156,
            maxWidth: 380,
            borderRadius: SIZES.SIZE_16,
            backgroundColor: COLORS.gray.lightGrayBackground,
          }}
        />
        <View
          style={{
            gap: SIZES.SIZE_12,
          }}
        >
          <CommonLink text="See All" onPress={() => {}} />
          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: COLORS.gray.lightGray,
            }}
          />
        </View>
      </View>
      <View
        style={{
          marginTop: 48,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: SIZES.SIZE_17,
            fontWeight: WEIGHTS.REGULAR,
            color: COLORS.loyalty.silver,
          }}
        >
          Explore Cards Nearby
        </Text>
        <Image
          style={{
            alignSelf: "flex-end",
            justifyContent: "center",
            height: 20,
            width: 20,
            resizeMode: "contain",
          }}
          source={IMAGES.icons.lightInfo}
        />
      </View>
      <View
        style={{
          marginTop: 24,
          gap: 24,
        }}
      >
        <View
          style={{
            height: 92,
            maxWidth: 380,
            borderRadius: SIZES.SIZE_16,
            backgroundColor: COLORS.gray.lightGrayBackground,
          }}
        />
        <View
          style={{
            height: 92,
            maxWidth: 380,
            borderRadius: SIZES.SIZE_16,
            backgroundColor: COLORS.gray.lightGrayBackground,
          }}
        />
        <View
          style={{
            height: 92,
            maxWidth: 380,
            borderRadius: SIZES.SIZE_16,
            backgroundColor: COLORS.gray.lightGrayBackground,
          }}
        />
      </View>
      <Text
        style={{
          marginTop: 36,
          fontWeight: WEIGHTS.REGULAR,
          fontSize: SIZES.SIZE_17,
          color: COLORS.gray.faintGrey,
          textAlign: "center",
        }}
      >
        Activate your profile to allow easy ordering, personalized choices and
        cash-back rewards
      </Text>
      <CommonButtonWithLinks
        buttonColor={COLORS.gray.lightGray}
        textColor={COLORS.gray.faintGrey}
        style={{
          marginTop: 24,
        }}
        text="Activate Profile"
        onPress={() => router.push(ROUTES.ONBOARDING_VALUE_PROP)}
      />
    </CommonAppLayout>
  );
}
