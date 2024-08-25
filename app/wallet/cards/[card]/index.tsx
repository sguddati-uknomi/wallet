import CommonAppLayout from "@/components/common/CommonAppLayout";
import { HeaderLeftIcon } from "@/components/header/HeaderLeftIcon";
import { COLORS } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { Header } from "@/components/header/Header";
import { SIZES, WEIGHTS } from "@/constants/Font";
import {
  ScrollView,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { IMAGES } from "@/assets/Images";
import WalletCard from "@/components/common/WalletCard";
import { PARAM, ROUTES } from "@/constants/Routes";
import CommonLink from "@/components/common/CommonLink";
import OrderSummary from "@/components/common/OrderSummary";

const testOrderSummaryData = {
  title: "Eegee's Phoenix",
  date: "February 17, 2023",
  time: "01:45 PM",
  orderId: "0348",
  items: [
    {
      description: "Smoothie Combo with Small Fries and a Chicken Burger",
      total: 27.5,
    },
    {
      description: "Small Fries",
      total: 2.5,
    },
  ],
  total: 30.0,
  points: 150,
  value: 5,
  children: (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <TouchableOpacity
        style={{
          backgroundColor: COLORS.secondary.lightGreen,
          paddingVertical: 8,
          paddingHorizontal: 20,
          borderRadius: 18,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
        }}
      >
        <Image
          source={IMAGES.icons.orderPhone}
          style={{ width: 14, height: 14 }}
          contentFit="contain"
        />
        <Text style={{ color: COLORS.gray.black }}>Call</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: COLORS.secondary.lightGreen,
          paddingVertical: 8,
          paddingHorizontal: 20,
          borderRadius: 18,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Image
          source={IMAGES.icons.orderLocation}
          style={{ width: 14, height: 14 }}
          contentFit="contain"
        />
        <Text style={{ color: COLORS.gray.black }}>Locate</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: COLORS.secondary.lightGreen,
          paddingVertical: 8,
          paddingHorizontal: 20,
          borderRadius: 18,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
        }}
      >
        <Image
          source={IMAGES.icons.orderFeedback}
          style={{ width: 14, height: 14 }}
          contentFit="contain"
        />
        <Text style={{ color: COLORS.gray.black }}>Feedback</Text>
      </TouchableOpacity>
    </View>
  ),
};

export default function CardDetails() {
  const router = useRouter();

  const card = {
    id: 2,
    brandTitle: "Lexi's Drink Bar",
    cardHolderName: "Jane Doe",
    cardExpirationDate: "16 January 2023",
    cardNumber: "J12345678910",
    backgroundColor: COLORS.semantic.red, // Example color
    brandLogo: IMAGES.demos.lexis, // Placeholder image URL
    show: false, // Adjust as needed
  };

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
    >
      <View style={{ alignItems: "center" }}>
        <View
          style={{
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
            buttonIcon={IMAGES.icons.darkBurger}
          />
        </View>
      </View>
      <View
        style={{
          marginTop: 24,
          padding: 10,
          width: "100%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <View
          style={{ display: "flex", flexDirection: "row", gap: 4, flex: 1 }}
        >
          <View
            style={{
              backgroundColor: "white",
              elevation: 3,
              borderWidth: 1,
              width: 42,
              height: 40,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              borderColor: COLORS.gray.lightGray,
            }}
          >
            <Image
              source={IMAGES.rewardLevel.bronze}
              style={{ width: 12, height: 18 }}
              contentFit="contain"
            />
          </View>
          <View>
            <Text style={{ fontWeight: WEIGHTS.BOLD }}>member</Text>
            <Text>bronze</Text>
          </View>
        </View>
        <View
          style={{ display: "flex", flexDirection: "row", gap: 4, flex: 1 }}
        >
          <View
            style={{
              backgroundColor: "white",
              elevation: 3,
              borderWidth: 1,
              width: 42,
              height: 40,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              borderColor: COLORS.gray.lightGray,
            }}
          >
            <Image
              source={IMAGES.icons.filledStar}
              style={{ width: 24, height: 24 }}
              contentFit="contain"
            />
          </View>
          <View>
            <Text style={{ fontWeight: WEIGHTS.BOLD }}>points / value</Text>
            <Text>0 / $0.00</Text>
          </View>
        </View>
      </View>
      <ScrollView
        style={{ marginTop: 24 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ marginTop: 4, marginBottom: 12 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: SIZES.SIZE_14,
                color: COLORS.loyalty.silver,
                fontWeight: WEIGHTS.SEMI_BOLD,
                marginBottom: 8,
              }}
            >
              Picks for You
            </Text>
            <CommonLink
              text="See All"
              onPress={() => {
                router.push(
                  ROUTES.WALLET_CARD_PICKS_FOR_YOU.replace(
                    PARAM.CARD_ID,
                    `${card.id}`
                  )
                );
              }}
            />
          </View>
        </View>
        <TouchableOpacity style={{ height: 104, borderRadius: 12 }}>
          <ImageBackground
            source={IMAGES.picksForYou}
            style={{ width: "100%", height: "100%", position: "relative" }}
            imageStyle={{ borderRadius: 12 }}
            resizeMode="cover"
          >
            <Text
              style={{
                color: COLORS.gray.white,
                width: 240,
                fontSize: SIZES.SIZE_22,
                fontWeight: WEIGHTS.BOLD,
                marginTop: 16,
                marginLeft: 16,
              }}
            >
              Pick your favorites to get personalized picks
            </Text>
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor: COLORS.primary.uKnomiLogoGreen,
                borderRadius: 24,
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                right: 8,
                top: 8,
                zIndex: 2,
              }}
            >
              <Image
                source={IMAGES.icons.go}
                style={{ width: 24, height: 12 }}
                contentFit="contain"
              />
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <View style={{ marginTop: 24, marginBottom: 12 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: SIZES.SIZE_14,
                color: COLORS.loyalty.silver,
                fontWeight: WEIGHTS.SEMI_BOLD,
                marginBottom: 8,
              }}
            >
              Your Last Order
            </Text>
            <CommonLink
              text="See All"
              onPress={() => {
                router.push(
                  ROUTES.WALLET_CARD_ORDER_HISTORY.replace(
                    PARAM.CARD_ID,
                    `${card.id}`
                  )
                );
              }}
            />
          </View>
        </View>
        {/* no order history */}
        <View
          style={{
            height: 258,
            backgroundColor: COLORS.gray.white,
            borderWidth: 1,
            borderColor: COLORS.gray.lightGray,
            borderRadius: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={IMAGES.lastOrder}
            style={{ width: 104, height: 108 }}
            contentFit="contain"
          />
          <Text
            style={{
              width: 240,
              fontSize: SIZES.SIZE_12,
              fontWeight: WEIGHTS.BOLD,
              marginTop: 16,
              textAlign: "center",
            }}
          >
            No Order History
          </Text>
          <Text
            style={{
              width: 240,
              fontSize: SIZES.SIZE_12,
              fontWeight: WEIGHTS.REGULAR,
              textAlign: "center",
              marginTop: 4,
            }}
          >
            Recent Orders from uKnomi participating restaurants will appear here
          </Text>
        </View>
        {/* order summary */}
        {/* <OrderSummary
          title={testOrderSummaryData.title}
          date={testOrderSummaryData.date}
          time={testOrderSummaryData.time}
          orderId={testOrderSummaryData.orderId}
          items={testOrderSummaryData.items}
          total={testOrderSummaryData.total}
          points={testOrderSummaryData.points}
          value={testOrderSummaryData.value}
        >
          {testOrderSummaryData?.children}
        </OrderSummary> */}
      </ScrollView>
    </CommonAppLayout>
  );
}
