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
import WalletCard from "@/components/common/WalletCard";
import CompanyCard from "@/components/common/CompanyCard";
import { ROUTES } from "@/constants/Routes";
import CommonModal from "@/components/common/CommonModal";
import CommonPageTitleSection from "@/components/common/CommonPageTitleSection";

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

const MOCK_COMPANY_DATA = [
  {
    id: 1,
    brandName: "Pizza Hut",
    address: "216 Tokai Rd, Dreyersdal, Cape Town, 7945",
    rating: 3,
    reviewCount: 1250,
    distance: 15,
    logo: IMAGES.demos.pizzaHut, // Replace with the actual image reference
  },
  {
    id: 2,
    brandName: "Dunkin' Donuts",
    address: "123 Main St, Springfield, USA",
    rating: 4,
    reviewCount: 980,
    distance: 10,
    logo: IMAGES.demos.dunkinDonuts, // Replace with the actual image reference
  },
  {
    id: 3,
    brandName: "Taco Bell",
    address: "456 Elm St, Gotham, USA",
    rating: 5,
    reviewCount: 1500,
    distance: 5,
    logo: IMAGES.demos.tacoBell, // Replace with the actual image reference
  },
];

export default function HomeScreen() {
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
          paddingTop: 24,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {CARD_MOCK_DATA.map((card, idx) => {
          return (
            <View
              key={idx}
              style={{
                marginBottom: idx === 0 ? -148 : 0,
                width: 356,
                height: 172,
              }}
            >
              <WalletCard
                brandTitle={card.brandTitle}
                cardHolderName={card.cardHolderName}
                cardExpirationDate={card.cardExpirationDate}
                cardNumber={card.cardNumber}
                backgroundColor={card.backgroundColor}
                brandLogo={card.brandLogo}
                showButtonIcon={idx === 0}
              />
            </View>
          );
        })}
        <View
          style={{
            gap: SIZES.SIZE_12,
            width: "100%",
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
          marginTop: 28,
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
          gap: 16,
        }}
      >
        {MOCK_COMPANY_DATA.map((company, idx) => {
          return (
            <CompanyCard
              key={idx}
              id={`${company.id}`}
              title={company.brandName}
              address={company.address}
              rating={company.rating}
              distance={company.distance}
              reviews={company.reviewCount}
              logo={company.logo}
              onCardAdd={() => {
                alert("Card has been added");
              }}
            />
          );
        })}
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
        onPress={() => router.push(ROUTES.AUTH_SIGN_IN)}
      />
    </CommonAppLayout>
  );
}
