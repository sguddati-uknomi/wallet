import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Header } from "@/components/header/Header";
import { IMAGES } from "@/assets/Images"; // Ensure this import path is correct
import { COLORS } from "@/constants/Colors";
import { SIZES, WEIGHTS } from "@/constants/Font"; // Ensure this import path is correct
import CommonAppLayout from "@/components/common/CommonAppLayout";
import CommonLink from "@/components/common/CommonLink";
import WalletCard from "@/components/common/WalletCard";
import CompanyCard from "@/components/common/CompanyCard";
import { PARAM, ROUTES } from "@/constants/Routes";
import { useContext } from "react";
import { UserAppStateContext } from "@/contexts/MockAppState";

export default function HomeScreen() {
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
            <TouchableOpacity onPress={() => router.push(ROUTES.ACCOUNT)}>
              <View
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-end",
                  alignSelf: "flex-end",
                }}
              >
                <Image
                  style={{ width: 44, height: 44, zIndex: 1 }}
                  contentFit="contain"
                  source={require("@/assets/images/image copy.png")}
                />
                <View
                  style={{
                    zIndex: 1,
                    width: 38,
                    height: 38,
                    position: "absolute",
                    borderRadius: 64,
                    left: 3,
                    top: 1,
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
              </View>
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
        <View
          key={"default"}
          style={{
            width: 340,
            height: 172,
          }}
        >
          <WalletCard
            backgroundColor={COLORS.gray.lightGray}
            onButtonIconPress={() => router.push(ROUTES.WALLET_SEARCH_CARD)}
          />
        </View>
        {mockAppState?.mockRewardCards.map((card, idx) => {
          return (
            <View
              key={idx}
              style={{
                marginTop: -148,
                width: 340,
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
                showButtonIcon={false}
                onCardPress={() =>
                  router.push(
                    ROUTES.WALLET_CARD.replace(PARAM.CARD_ID, `${card.id}`)
                  )
                }
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
          <CommonLink
            text={
              mockAppState?.mockRewardCards.length === 0
                ? "You have no cards"
                : "See All"
            }
            onPress={() => {
              router.push(ROUTES.WALLET_CARDS);
            }}
          />
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
          flex: 1,
        }}
      >
        {mockAppState?.mockCompanyRewardsCards.map((company, idx) => {
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
    </CommonAppLayout>
  );
}
