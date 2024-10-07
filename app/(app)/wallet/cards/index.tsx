import React, { useContext } from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";
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
import { UserAppStateContext } from "@/contexts/MockAppState";
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
  const { mockAppState } = useContext(UserAppStateContext);

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
            <TouchableOpacity onPress={() => router.push(ROUTES.ACCOUNT)}>
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
            </TouchableOpacity>
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
          {mockAppState?.mockRewardCards.map((card, idx) => {
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
                    key={card.id}
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
                      key={"default-card"}
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
    </CommonAppLayout>
  );
}
