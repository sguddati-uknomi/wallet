import React from "react";
import { Text, View, Image } from "react-native";
import { useRouter } from "expo-router";
import { Header } from "@/components/header/Header";
import { IMAGES } from "@/assets/Images"; // Ensure this import path is correct
import { COLORS } from "@/constants/Colors";
import { SIZES, WEIGHTS } from "@/constants/Font"; // Ensure this import path is correct
import CommonAppLayout from "@/components/common/CommonAppLayout";
import CommonLink from "@/components/common/CommonLink";
import CommonButtonWithLinks from "@/components/common/CommonButtonWithLinks";
import WalletCard from "@/components/common/WalletCard";
import CompanyCard from "@/components/common/CompanyCard";
import { ROUTES } from "@/constants/Routes";
import { HeaderLeftIcon } from "@/components/header/HeaderLeftIcon";

export default function SupportuKnomi() {
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
          leftComponent={<HeaderLeftIcon onPress={() => router.dismiss()} />}
        />
      }
      scrollable
    >
      <Text
        style={{
          fontSize: SIZES.SIZE_17,
          color: COLORS.loyalty.silver,
          width: "100%",
          fontWeight: WEIGHTS.SEMI_BOLD,
        }}
      >
        How uKnomi Works
      </Text>
      <Image
        style={{ width: 124, alignSelf: "center", marginVertical: 24 }}
        source={IMAGES.uKnomiLogo}
        resizeMode="contain"
      />
      <View style={{ gap: 16, flex: 1 }}>
        {[
          "There are so many ways to benefit from your uKnomi Wallet! You can pay your order with ease using uKnomi Pay, get personalized choices based on your favorite menu items and past orders, earn cash-back reward points as well as exclusive membership-tier benefits!",
          "Each restaurant has their own point value. To confirm your card’s point value, visit your card’s Rewards Summary page.",
          "When placing an order at your card’s restaurant, inform the operator that you want to use your rewards for payment. If you have enough points to cover the full amount, they will be deducted from your total. Alternatively, opt in for our easy auto-pay option with uKnomi Pay.",
          "Points expire after three months from the issuance date, so be sure to check your balance and membership-tier on your card’s Rewards Summary page. As an added bonus, restaurants may reward you with special offers and discounts based on your membership-tier which is determined based on your order frequency. For more information, visit your card’s Rewards Summary page.",
          "If you unregister from the uKnomi rewards program, your accumulated rewards will be forfeited. Consider deactivating your account or, if no longer needed, hide your a card(s) instead.",
        ].map((text, index) => (
          <Text style={{ flex: 1, flexWrap: "wrap", color: COLORS.gray.black }}>
            {text}
          </Text>
        ))}
      </View>
      <View style={{ marginTop: 48, alignItems: "center" }}>
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
