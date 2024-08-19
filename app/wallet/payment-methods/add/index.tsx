import React from "react";
import { Image, View, StyleProp, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Header } from "@/components/header/Header";
import { Logo } from "@/components/header/Logo";
import { IMAGES } from "@/assets/Images"; // Ensure this import path is correct
import { SIZES, WEIGHTS } from "@/constants/Font"; // Ensure this import path is correct
import CommonAppLayout from "@/components/common/CommonAppLayout";
import CommonLink from "@/components/common/CommonLink";
import CommonButtonWithLinks from "@/components/common/CommonButtonWithLinks";
import { HeaderLeftIcon } from "@/components/header/HeaderLeftIcon";
import { ROUTES } from "@/constants/Routes";
import PageTitleSection from "@/components/common/CommonPageTitleSection";
import ProgressIndicator from "@/components/common/ProgressIndicator";
import { COLORS } from "@/constants/Colors";
import CustomInput from "@/components/common/CommonInput";

export default function EnableBluetooth() {
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
            <HeaderLeftIcon
              text="Payment Methods"
              onPress={() => router.dismiss()}
            />
          }
        />
      }
      scrollable
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <PageTitleSection
            title="Add Your Card"
            titleStyle={{
              fontSize: SIZES.SIZE_32,
            }}
          />
          {/* Camera */}
          <View
            style={{
              width: 280,
              height: 184,
              borderWidth: 4,
              borderRadius: 12,
              borderColor: COLORS.primary.uKnomiLogoGreen,
              marginTop: 12,
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: SIZES.SIZE_14,
                  fontWeight: WEIGHTS.REGULAR,
                  color: COLORS.gray.midGray,
                }}
              >
                Capture Your Card
              </Text>
            </View>
            <View
              style={{
                position: "absolute",
                width: 32,
                height: 32,
                borderRadius: 16,
                backgroundColor: COLORS.primary.uKnomiLogoGreen,
                right: -16,
                top: -16,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: 16, height: 16 }}
                source={IMAGES.icons.lightCamera}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>
        <View>
          {/* Visa or Mastercard */}
          <View
            style={{
              flexDirection: "row",
              display: "flex",
              gap: 16,
              marginVertical: 16,
              justifyContent: "center",
            }}
          >
            <TouchableOpacity>
              <Image
                style={{ width: 60, height: 48 }}
                source={IMAGES.payments.visa}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{ width: 60, height: 48 }}
                source={IMAGES.payments.mastercard}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          {/* input forms */}
          <View style={{ gap: 12, marginBottom: 24 }}>
            <CustomInput
              label="Card Number"
              isMinimalistic
              inputBackgroundColor={COLORS.gray.white}
              value={""}
              placeholder="0000 0000 0000 0000"
              inputTextColor={COLORS.gray.black}
              onChangeText={() => {}}
            />
            <View style={{ display: "flex", flexDirection: "row", gap: 24 }}>
              <CustomInput
                style={{ flex: 1 }}
                label="Expiry Date"
                isMinimalistic
                inputBackgroundColor={COLORS.gray.white}
                value={""}
                placeholder="MM/YY"
                inputTextColor={COLORS.gray.black}
                onChangeText={() => {}}
              />
              <CustomInput
                style={{ flex: 1 }}
                label="CVC"
                isMinimalistic
                inputBackgroundColor={COLORS.gray.white}
                value={""}
                placeholder="000"
                inputTextColor={COLORS.gray.black}
                onChangeText={() => {}}
              />
            </View>
            <CustomInput
              style={{ flex: 1 }}
              label="Name on Card"
              isMinimalistic
              inputBackgroundColor={COLORS.gray.white}
              value={""}
              placeholder="John Doe"
              inputTextColor={COLORS.gray.black}
              onChangeText={() => {}}
            />
          </View>
        </View>
        <CommonButtonWithLinks
          text="Save"
          onPress={() => router.push(ROUTES.AUTH_ENABLE_NOTIFICATIONS)}
        >
          <CommonLink
            text="Remove"
            color={COLORS.darkMode.redError}
            onPress={() => router.push(ROUTES.AUTH_ENABLE_NOTIFICATIONS)}
          />
        </CommonButtonWithLinks>
      </View>
    </CommonAppLayout>
  );
}

const styles = {
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 36, // Added margin to separate image from text
  },
  image: {
    width: 290,
    height: 268,
  },
} as StyleProp<any>;
