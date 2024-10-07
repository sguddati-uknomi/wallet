import CommonAppLayout from "@/components/common/CommonAppLayout";
import { HeaderLeftIcon } from "@/components/header/HeaderLeftIcon";
import { COLORS } from "@/constants/Colors";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Header } from "@/components/header/Header";
import { SIZES, WEIGHTS } from "@/constants/Font";
import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { IMAGES } from "@/assets/Images";
import OrderSummary from "@/components/common/OrderSummary";
import { UserAppStateContext } from "@/contexts/MockAppState";
import { useContext, useState } from "react";
import CommonModal from "@/components/common/CommonModal";
import CommonButtonWithLinks from "@/components/common/CommonButtonWithLinks";

export default function ActiveOrder() {
  const router = useRouter();
  const { status, review } = useLocalSearchParams();
  const { mockAppState } = useContext(UserAppStateContext);
  const [modalVisible, setModalVisible] = useState<boolean>(
    review ? true : false
  );
  const [reviewRating, setReviewRating] = useState(0);

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
        Order
      </Text>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 24, marginBottom: 12 }}
      >
        <View style={{ gap: 32 }}>
          {status === "in-progress" && (
            <>
              <Text
                style={{ textAlign: "center", width: 240, alignSelf: "center" }}
              >
                Show the order summary and QR code to the cashier at the
                drive-thru window.
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
            </>
          )}

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
      {/* Modal for Review */}
      <CommonModal
        modalVisible={modalVisible}
        onClose={() => setModalVisible(false)}
      >
        <Text style={{ textAlign: "center", fontSize: SIZES.SIZE_16 }}>
          How was your experience with this order?
        </Text>

        <View style={styles.ratingContainer}>
          {/* Star Ratings */}
          {Array.from({ length: 5 }).map((_, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setReviewRating(index + 1)}
            >
              <Image
                source={
                  index < (reviewRating ?? 0)
                    ? IMAGES.icons.filledStar
                    : IMAGES.icons.unfilledStar
                }
                style={styles.starIcon}
                contentFit="contain"
              />
            </TouchableOpacity>
          ))}
        </View>

        <CommonButtonWithLinks
          text={"Submit Review"}
          onPress={() => {
            setModalVisible(false);
            router.dismiss();
          }}
        />
      </CommonModal>
    </CommonAppLayout>
  );
}

const styles = {
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 42,
  },
  starIcon: {
    width: 36,
    height: 36,
    marginRight: 2, // Space between stars
  },
} as StyleProp<any>;
