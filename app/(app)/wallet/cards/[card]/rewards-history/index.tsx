import CommonAppLayout from "@/components/common/CommonAppLayout";
import { HeaderLeftIcon } from "@/components/header/HeaderLeftIcon";
import { COLORS } from "@/constants/Colors";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Header } from "@/components/header/Header";
import { SIZES, WEIGHTS } from "@/constants/Font";
import { Text, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";
import { IMAGES } from "@/assets/Images";
import CommonPageTitleSection from "@/components/common/CommonPageTitleSection";
import { UserAppStateContext } from "@/contexts/MockAppState";
import { useContext } from "react";

export default function RewardsHistory() {
  const router = useRouter();
  const { card } = useLocalSearchParams();
  const { mockAppState } = useContext(UserAppStateContext);

  const mockCard = mockAppState?.mockRewardCards.filter(
    (demoCard) => demoCard?.id === card
  )[0];
  // const rewardHistory =
  //   mockCard?.rewardHistor?.length > 0
  //     ? mockCard?.orderHistory[0]
  //     : null;

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
      scrollable
    >
      <Text
        style={{
          fontSize: SIZES.SIZE_17,
          color: COLORS.loyalty.silver,
          width: "100%",
          fontWeight: WEIGHTS.SEMI_BOLD,
          marginBottom: 8,
        }}
      >
        Rewards History
      </Text>

      {mockCard?.rewardsHistory && mockCard?.rewardsHistory?.length > 0 && (
        <View style={{ gap: 8 }}>
          <View>
            <View
              style={{
                width: "100%",
                minHeight: 68,
                borderBottomWidth: 1,
                borderColor: COLORS.gray.lightGray,
                paddingVertical: 12,
              }}
            >
              {/* Order Header */}
              <View>
                <Text
                  style={{
                    width: 240,
                    fontSize: SIZES.SIZE_12,
                    fontWeight: WEIGHTS.SEMI_BOLD,
                  }}
                >
                  Lexi's
                </Text>
                {["February 17, 2023", "01:45 PM", "Order ID: 0348"].length >
                  0 && (
                  <Text
                    style={{
                      fontSize: SIZES.SIZE_12,
                      fontWeight: WEIGHTS.REGULAR,
                      marginTop: 4,
                    }}
                  >
                    {["February 17, 2023", "01:45 PM", "Order ID: 0348"].join(
                      " | "
                    )}
                  </Text>
                )}
              </View>
              <View
                style={{
                  paddingTop: 12,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                {/* <View style={styles.summaryContainer}> */}
                <Text style={styles.summaryText}>Total: $12.00</Text>
                <View style={styles.summaryDetail}>
                  <Text style={styles.summaryText}>Points: 12</Text>
                  <Image source={IMAGES.icons.filledStar} style={styles.icon} />
                </View>
                <View style={styles.summaryDetail}>
                  <Text style={styles.summaryText}>Value: $27.00</Text>
                  <Image source={IMAGES.icons.coupon} style={styles.icon} />
                </View>
                {/* </View> */}
              </View>
              {/* <Image
              source={IMAGES.icons.rightArrow}
              style={{ width: 16, height: 16, alignSelf: "flex-end" }}
            /> */}
            </View>
          </View>
          <View>
            <View
              style={{
                width: "100%",
                minHeight: 68,
                borderBottomWidth: 1,
                borderColor: COLORS.gray.lightGray,
                paddingVertical: 12,
              }}
            >
              {/* Order Header */}
              <View>
                <Text
                  style={{
                    width: 240,
                    fontSize: SIZES.SIZE_12,
                    fontWeight: WEIGHTS.SEMI_BOLD,
                  }}
                >
                  Lexi's
                </Text>
                {["February 17, 2023", "01:45 PM", "Order ID: 0348"].length >
                  0 && (
                  <Text
                    style={{
                      fontSize: SIZES.SIZE_12,
                      fontWeight: WEIGHTS.REGULAR,
                      marginTop: 4,
                    }}
                  >
                    {["February 17, 2023", "01:45 PM", "Order ID: 0348"].join(
                      " | "
                    )}
                  </Text>
                )}
              </View>
              <View
                style={{
                  paddingTop: 12,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                {/* <View style={styles.summaryContainer}> */}
                <Text style={styles.summaryText}>Total: $12.00</Text>
                <View style={styles.summaryDetail}>
                  <Text style={styles.summaryText}>Points: 12</Text>
                  <Image source={IMAGES.icons.filledStar} style={styles.icon} />
                </View>
                <View style={styles.summaryDetail}>
                  <Text style={styles.summaryText}>Value: $27.00</Text>
                  <Image source={IMAGES.icons.coupon} style={styles.icon} />
                </View>
                {/* </View> */}
              </View>
            </View>
          </View>
        </View>
      )}
      {(!mockCard?.rewardsHistory ||
        mockCard?.rewardsHistory?.length === 0) && <NoOrderHistory />}
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
        style={{ width: 212, height: 128, marginBottom: 12 }}
        contentFit="contain"
      />
      <CommonPageTitleSection
        titleStyle={{
          width: 240,
          fontSize: SIZES.SIZE_22,
          fontWeight: WEIGHTS.BOLD,
          marginTop: 16,
        }}
        descriptionStyle={{
          width: 270,
          fontSize: SIZES.SIZE_17,
          fontWeight: WEIGHTS.REGULAR,
          textAlign: "center",
          marginTop: 8,
        }}
        title={"No History"}
        description="Recent orders and rewards from uKnomi participating restaurants will appear here"
      />
    </View>
  );
}

const styles = {
  itemsText: {
    flex: 1,
    fontSize: SIZES.SIZE_12,
    fontWeight: WEIGHTS.REGULAR,
    color: COLORS.gray.midGray,
  },
  summaryContainer: {
    flex: 1,
    alignSelf: "flex-end",
    gap: 4,
  },
  summaryText: {
    fontSize: SIZES.SIZE_12,
    fontWeight: WEIGHTS.SEMI_BOLD,
    textAlign: "right",
  },
  summaryDetail: {
    flexDirection: "row-reverse",
    alignSelf: "flex-end",
    alignItems: "center",
    gap: 4,
  },
  icon: {
    width: 16,
    height: 16,
    alignSelf: "center",
  },
} as StyleProp<any>;
