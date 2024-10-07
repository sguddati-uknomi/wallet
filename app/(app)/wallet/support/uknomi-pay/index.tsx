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

export default function SupportuKnomiPay() {
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
        source={IMAGES.uKnomiPayLogo}
        resizeMode="contain"
      />
      <View style={{ gap: 16, flex: 1 }}>
        {[
          "To make your restaurant payments even more convenient, uKmomi Pay offers an Auto-pay option that allows you to use your pre-loaded credit card at any of your favourite restaurants.",
          "Once you've added your credit card, enable the auto-pay option in Payment Methods page. This feature ensures that your pre-loaded credit card is ready to be used for seamless transactions at the drive-through or counter.",
          "When you visit a participating restaurant, proceed to place your order as usual. Let the cashier know that you'll be using uKnomi Pay and authorize the transaction using the app. Select the desired credit card from your stored options, and the payment will be processed securely and quickly. You can have peace of mind knowing that your payment is being handled efficiently, all while earning rewards for your loyalty!",
        ].map((text, index) => (
          <Text
            key={index}
            style={{
              flex: 1,
              flexWrap: "wrap",
              color: COLORS.gray.black,
            }}
          >
            {text}
          </Text>
        ))}
      </View>
      <Image
        style={{ width: 200, height: 160, alignSelf: "center", marginTop: 64 }}
        source={IMAGES.enableNotification}
        resizeMode="contain"
      />
    </CommonAppLayout>
  );
}
