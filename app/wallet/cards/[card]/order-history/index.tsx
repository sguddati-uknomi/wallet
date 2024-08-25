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

const testOrderSummaryDataArray = [
  {
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
  },
  {
    title: "Burger King New York",
    date: "March 5, 2023",
    time: "12:30 PM",
    orderId: "0523",
    items: [
      {
        description: "Whopper Meal with Medium Fries and Drink",
        total: 12.99,
      },
      {
        description: "Onion Rings",
        total: 2.49,
      },
    ],
    total: 15.48,
    points: 120,
    value: 3,
  },
  {
    title: "Starbucks Los Angeles",
    date: "April 10, 2023",
    time: "09:15 AM",
    orderId: "1028",
    items: [
      {
        description: "Venti Iced Coffee with Caramel Syrup",
        total: 4.95,
      },
      {
        description: "Ham & Cheese Croissant",
        total: 3.75,
      },
    ],
    total: 8.7,
    points: 85,
    value: 2,
  },
];

export default function OrderHistory() {
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
      <Text
        style={{
          fontSize: SIZES.SIZE_14,
          color: COLORS.loyalty.silver,
          fontWeight: WEIGHTS.SEMI_BOLD,
        }}
      >
        Your Order History
      </Text>

      <ScrollView
        style={{ marginTop: 24, marginBottom: 12 }}
        showsVerticalScrollIndicator={false}
      >
        {/* no order history */}
        {/* <NoOrderHistory /> */}

        {/* order summary */}
        <View style={{ gap: 12 }}>
          {testOrderSummaryDataArray.map((item, idx) => (
            <OrderSummary
              key={item.orderId}
              title={item.title}
              date={item.date}
              time={item.time}
              orderId={item.orderId}
              items={item.items}
              total={item.total}
              points={item.points}
              value={item.value}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: COLORS.secondary.lightGreen,
                    paddingVertical: 8,
                    paddingHorizontal: 20,
                    borderRadius: 18,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
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
                    justifyContent: "center",
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
                    justifyContent: "center",
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
            </OrderSummary>
          ))}
        </View>
      </ScrollView>
    </CommonAppLayout>
  );
}

function NoOrderHistory() {
  return (
    <View
      style={{
        backgroundColor: COLORS.gray.white,
        borderColor: COLORS.gray.lightGray,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 64,
      }}
    >
      <Image
        source={IMAGES.orderHistory}
        style={{ width: 212, height: 128 }}
        contentFit="contain"
      />
      <Text
        style={{
          width: 240,
          fontSize: SIZES.SIZE_22,
          fontWeight: WEIGHTS.BOLD,
          marginTop: 16,
          textAlign: "center",
        }}
      >
        No History
      </Text>
      <Text
        style={{
          width: 270,
          fontSize: SIZES.SIZE_17,
          fontWeight: WEIGHTS.REGULAR,
          textAlign: "center",
          marginTop: 8,
        }}
      >
        Recent orders from uKnomi participating restaurants will appear here
      </Text>
    </View>
  );
}
