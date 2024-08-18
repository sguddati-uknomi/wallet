import React from "react";
import { Text, Image, View } from "react-native";
import { useRouter } from "expo-router";
import { Header } from "@/components/header/Header";
import { IMAGES } from "@/assets/Images"; // Ensure this import path is correct
import { COLORS } from "@/constants/Colors";
import { SIZES, WEIGHTS } from "@/constants/Font"; // Ensure this import path is correct
import CommonAppLayout from "@/components/common/CommonAppLayout";
import CommonButtonWithLinks from "@/components/common/CommonButtonWithLinks";
import WalletCard from "@/components/common/WalletCard";
import { ROUTES } from "@/constants/Routes";
import CommonLink from "@/components/common/CommonLink";
import { HeaderLeftIcon } from "@/components/header/HeaderLeftIcon";
const CARD_MOCK_DATA = [
  {
    id: 1,
    brandTitle: "Eegee's",
    cardHolderName: "Jane Doe",
    cardExpirationDate: "16 January 2023",
    cardNumber: "J12345678910",
    backgroundColor: COLORS.semantic.blue, // Example color
    brandLogo: IMAGES.demos.eegees, // Placeholder image URL
    show: true, // Adjust as needed
  },
  {
    id: 2,
    brandTitle: "Lexi's Drink Bar",
    cardHolderName: "Jane Doe",
    cardExpirationDate: "16 January 2023",
    cardNumber: "J12345678910",
    backgroundColor: COLORS.semantic.red, // Example color
    brandLogo: IMAGES.demos.lexis, // Placeholder image URL
    show: false, // Adjust as needed
  },
];

export default function AllCards() {
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
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: SIZES.SIZE_17,
            color: COLORS.loyalty.silver,
            width: "100%",
          }}
        >
          Your Rewards Cards
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            width: 328,
            flex: 4,
          }}
        >
          {CARD_MOCK_DATA.map((card, idx) => {
            return (
              <>
                <View
                  key={idx}
                  style={{
                    minWidth: 150,
                    maxWidth: 154,
                    height: 116,
                    flex: 1,
                    marginTop: idx > 0 ? 28 : 0,
                  }}
                >
                  <WalletCard
                    brandTitle={card.brandTitle}
                    cardHolderName={card.cardHolderName}
                    cardExpirationDate={card.cardExpirationDate}
                    cardNumber={card.cardNumber}
                    backgroundColor={card.backgroundColor}
                    brandLogo={card.brandLogo}
                    buttonIcon={IMAGES.icons.lightVisible}
                    logoOnly
                  />
                </View>
                {idx === 0 && (
                  <View
                    key="default"
                    style={{
                      minWidth: 150,
                      maxWidth: 154,
                      height: 116,
                      flex: 1,
                    }}
                  >
                    <WalletCard
                      backgroundColor={COLORS.gray.lightGrayBackground}
                      buttonIcon={IMAGES.icons.darkPlus}
                      logoOnly
                    />
                  </View>
                )}
              </>
            );
          })}
        </View>
      </View>
      <View
        style={{
          marginTop: 36,
          width: "100%",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontWeight: WEIGHTS.REGULAR,
            fontSize: SIZES.SIZE_17,
            color: COLORS.gray.faintGrey,
            textAlign: "center",
            width: 300,
          }}
        >
          Activate your profile to allow easy ordering, personalized choices and
          cash-back rewards
        </Text>
      </View>
      <CommonButtonWithLinks
        buttonColor={COLORS.gray.lightGray}
        textColor={COLORS.gray.faintGrey}
        style={{
          marginTop: 24,
        }}
        text="Activate Profile"
        onPress={() => router.push(ROUTES.AUTH_SIGN_IN)}
      >
        <CommonLink
          text="Not now, thanks"
          style={{
            color: COLORS.gray.midGray,
          }}
          onPress={() => router.push(ROUTES.AUTH_SIGN_IN)}
        />
      </CommonButtonWithLinks>
    </CommonAppLayout>
  );
}
