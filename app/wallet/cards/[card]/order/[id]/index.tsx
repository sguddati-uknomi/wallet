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
];

export default function ActiveOrder() {
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
        Active Order
      </Text>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 24, marginBottom: 12 }}
      >
        <View style={{ gap: 32 }}>
          <Text
            style={{ textAlign: "center", width: 240, alignSelf: "center" }}
          >
            Show the order summary and QR code to the cashier at the drive-thru
            window.
          </Text>

          <View style={{ alignItems: "center" }}>
            <Image
              source={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/2560px-QR_code_for_mobile_English_Wikipedia.svg.png"
              }
              style={{ width: 200, height: 200 }}
              contentFit="contain"
            />
          </View>

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
                gap: 24,
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
                  flex: 1,
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
                  flex: 1,
                }}
              >
                <Image
                  source={IMAGES.icons.orderLocation}
                  style={{ width: 14, height: 14 }}
                  contentFit="contain"
                />
                <Text style={{ color: COLORS.gray.black }}>Locate</Text>
              </TouchableOpacity>
            </View>
          </OrderSummary>
        </View>
      </ScrollView>
    </CommonAppLayout>
  );
}
