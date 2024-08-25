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
    date: "",
    time: "",
    orderId: "0638",
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
    date: "",
    time: "",
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
];

export default function OrderRecommendation() {
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
    >
      <Text
        style={{
          fontSize: SIZES.SIZE_14,
          color: COLORS.loyalty.silver,
          fontWeight: WEIGHTS.SEMI_BOLD,
        }}
      >
        Order Recommendation
      </Text>

      <ScrollView
        style={{ marginTop: 24, marginBottom: 12 }}
        showsVerticalScrollIndicator={false}
      >
        {/* order summary */}
        <View style={{ gap: 12 }}>
          <Text style={{ fontWeight: WEIGHTS.SEMI_BOLD }}>
            Let's play it safe
          </Text>
          <OrderSummary
            key={testOrderSummaryDataArray[0].orderId}
            title={testOrderSummaryDataArray[0].title}
            date={testOrderSummaryDataArray[0].date}
            time={testOrderSummaryDataArray[0].time}
            orderId={testOrderSummaryDataArray[0].orderId}
            items={testOrderSummaryDataArray[0].items}
            total={testOrderSummaryDataArray[0].total}
            points={testOrderSummaryDataArray[0].points}
            value={testOrderSummaryDataArray[0].value}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
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
                  flex: 1,
                }}
              >
                <Text style={{ color: COLORS.gray.black }}>Place order</Text>
              </TouchableOpacity>
            </View>
          </OrderSummary>
          <Text style={{ marginTop: 24, fontWeight: WEIGHTS.SEMI_BOLD }}>
            Let's try something different
          </Text>
          <OrderSummary
            key={testOrderSummaryDataArray[1].orderId}
            title={testOrderSummaryDataArray[1].title}
            date={testOrderSummaryDataArray[1].date}
            time={testOrderSummaryDataArray[1].time}
            orderId={testOrderSummaryDataArray[1].orderId}
            items={testOrderSummaryDataArray[1].items}
            total={testOrderSummaryDataArray[1].total}
            points={testOrderSummaryDataArray[1].points}
            value={testOrderSummaryDataArray[1].value}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
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
                  flex: 1,
                }}
              >
                <Text style={{ color: COLORS.gray.black }}>Place Order</Text>
              </TouchableOpacity>
            </View>
          </OrderSummary>
        </View>
      </ScrollView>
    </CommonAppLayout>
  );
}
