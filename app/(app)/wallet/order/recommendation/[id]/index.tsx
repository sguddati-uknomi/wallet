import CommonAppLayout from "@/components/common/CommonAppLayout";
import { HeaderLeftIcon } from "@/components/header/HeaderLeftIcon";
import { COLORS } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { Header } from "@/components/header/Header";
import { SIZES, WEIGHTS } from "@/constants/Font";
import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import OrderSummary from "@/components/common/OrderSummary";
import CommonModal from "@/components/common/CommonModal";
import CommonButtonWithLinks from "@/components/common/CommonButtonWithLinks";
import React, { useContext } from "react";
import { UserAppStateContext } from "@/contexts/MockAppState";

export default function OrderRecommendation() {
  const router = useRouter();
  const { mockAppState, setMockAppState } = useContext(UserAppStateContext);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedOrder, setSelectedOrder] = React.useState<any>(null);

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
          <Text style={{ fontWeight: WEIGHTS.SEMI_BOLD }}>Usual</Text>
          <OrderSummary
            key={mockAppState.mockOrderRecommendation.usual.orderId}
            title={mockAppState.mockOrderRecommendation.usual.title}
            date={mockAppState.mockOrderRecommendation.usual.date}
            time={mockAppState.mockOrderRecommendation.usual.time}
            orderId={mockAppState.mockOrderRecommendation.usual.orderId}
            items={mockAppState.mockOrderRecommendation.usual.items}
            total={mockAppState.mockOrderRecommendation.usual.total}
            points={mockAppState.mockOrderRecommendation.usual.points}
            value={mockAppState.mockOrderRecommendation.usual.value}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(true);
                  setSelectedOrder(mockAppState.mockOrderRecommendation.usual);
                }}
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
            Alternative
          </Text>
          <OrderSummary
            key={mockAppState.mockOrderRecommendation.alternative.orderId}
            title={mockAppState.mockOrderRecommendation.alternative.title}
            date={mockAppState.mockOrderRecommendation.alternative.date}
            time={mockAppState.mockOrderRecommendation.alternative.time}
            orderId={mockAppState.mockOrderRecommendation.alternative.orderId}
            items={mockAppState.mockOrderRecommendation.alternative.items}
            total={mockAppState.mockOrderRecommendation.alternative.total}
            points={mockAppState.mockOrderRecommendation.alternative.points}
            value={mockAppState.mockOrderRecommendation.alternative.value}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(true);
                  setSelectedOrder(
                    mockAppState.mockOrderRecommendation.alternative
                  );
                }}
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
      <CommonModal
        modalVisible={modalVisible}
        onClose={() => {
          setModalVisible(false);
        }}
      >
        <Text style={{ paddingBottom: 24, textAlign: "center" }}>
          ${selectedOrder?.total.toFixed(2)} will be used from your uKnomi Pay
          Balance of ${mockAppState?.uKnomiBalance}.{"\n\n"}
          Please confirm the order.
        </Text>

        <CommonButtonWithLinks
          text={"Confirm"}
          onPress={() => {
            setModalVisible(false);
            setSelectedOrder(null);
            setMockAppState((val: any) => {
              return {
                ...val,
                uKnomiBalance: `${(parseFloat(val.uKnomiBalance) - parseFloat(selectedOrder?.total)).toFixed(2)}`,
              };
            });
            router.replace(
              `/wallet/order/${selectedOrder?.orderId}?status=in-progress`
            );
          }}
        />
      </CommonModal>
    </CommonAppLayout>
  );
}
