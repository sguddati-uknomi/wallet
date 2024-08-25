import CommonAppLayout from "@/components/common/CommonAppLayout";
import { HeaderLeftIcon } from "@/components/header/HeaderLeftIcon";
import { COLORS } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { Header } from "@/components/header/Header";
import { SIZES, WEIGHTS } from "@/constants/Font";
import { Text, View } from "react-native";
import { Image } from "expo-image";
import { IMAGES } from "@/assets/Images";

export default function Notifications() {
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
          fontSize: SIZES.SIZE_17,
          color: COLORS.loyalty.silver,
          width: "100%",
          fontWeight: WEIGHTS.SEMI_BOLD,
          marginBottom: 8,
        }}
      >
        Notifications
      </Text>
      <View style={{ marginTop: 24, marginBottom: 20 }}>
        <Text
          style={{
            fontSize: SIZES.SIZE_12,
            color: COLORS.loyalty.silver,
            fontWeight: WEIGHTS.SEMI_BOLD,
            marginBottom: 8,
          }}
        >
          Today
        </Text>
        <View>
          <View
            style={{
              width: "100%",
              minHeight: 68,
              display: "flex",
              flexDirection: "row",
              borderBottomWidth: 1,
              borderColor: COLORS.gray.lightGray,
              paddingVertical: 12,
            }}
          >
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 10,
                marginRight: 8,
                marginTop: 4,
                backgroundColor: COLORS.primary.uKnomiLogoGreen,
              }}
            />
            <View style={{ flex: 1, gap: 4, flexWrap: "wrap" }}>
              <Text style={{ fontSize: SIZES.SIZE_14, fontWeight: 510 }}>
                Approve Auto-Payment
              </Text>
              <Text
                style={{ fontSize: SIZES.SIZE_12, color: COLORS.gray.black }}
              >
                Order ID: #0348
              </Text>
              <Text
                style={{
                  fontSize: SIZES.SIZE_12,
                  color: COLORS.gray.black,
                }}
              >
                15s ago
              </Text>
            </View>
            <View style={{ width: 100, alignSelf: "flex-end" }}>
              <Text
                style={{
                  fontSize: SIZES.SIZE_14,
                  color: COLORS.gray.black,
                  flexWrap: "wrap",
                  fontWeight: 510,
                }}
              >
                Total: $300.00
              </Text>
            </View>
            <Image
              source={IMAGES.icons.rightArrow}
              style={{ width: 16, height: 16, alignSelf: "flex-end" }}
            />
          </View>
          <View
            style={{
              width: "100%",
              minHeight: 68,
              display: "flex",
              flexDirection: "row",
              borderBottomWidth: 1,
              borderColor: COLORS.gray.lightGray,
              paddingVertical: 12,
            }}
          >
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 10,
                marginRight: 8,
                marginTop: 4,
                backgroundColor: COLORS.primary.uKnomiLogoGreen,
              }}
            />
            <View style={{ flex: 1, gap: 4, flexWrap: "wrap" }}>
              <Text style={{ fontSize: SIZES.SIZE_14, fontWeight: 510 }}>
                Approve Auto-Payment
              </Text>
              <Text
                style={{ fontSize: SIZES.SIZE_12, color: COLORS.gray.black }}
              >
                Order ID: #0348
              </Text>
              <Text
                style={{
                  fontSize: SIZES.SIZE_12,
                  color: COLORS.gray.black,
                }}
              >
                15s ago
              </Text>
            </View>
            <View style={{ width: 100, alignSelf: "flex-end" }}>
              <Text
                style={{
                  fontSize: SIZES.SIZE_14,
                  color: COLORS.gray.black,
                  flexWrap: "wrap",
                  fontWeight: 510,
                }}
              >
                Total: $300.00
              </Text>
            </View>
            <Image
              source={IMAGES.icons.rightArrow}
              style={{ width: 16, height: 16, alignSelf: "flex-end" }}
            />
          </View>
        </View>
      </View>

      <View>
        <Text
          style={{
            fontSize: SIZES.SIZE_12,
            color: COLORS.loyalty.silver,
            fontWeight: WEIGHTS.SEMI_BOLD,
          }}
        >
          Older
        </Text>
        <View>
          <View
            style={{
              width: "100%",
              minHeight: 68,
              display: "flex",
              flexDirection: "row",
              borderBottomWidth: 1,
              borderColor: COLORS.gray.lightGray,
              paddingVertical: 12,
            }}
          >
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 10,
                marginRight: 8,
                marginTop: 4,
                backgroundColor: COLORS.gray.lightGray,
              }}
            />
            <View style={{ flex: 1, gap: 4, flexWrap: "wrap" }}>
              <Text style={{ fontSize: SIZES.SIZE_14, fontWeight: 510 }}>
                Approve Auto-Payment
              </Text>
              <Text
                style={{ fontSize: SIZES.SIZE_12, color: COLORS.gray.black }}
              >
                Order ID: #0348
              </Text>
              <Text
                style={{
                  fontSize: SIZES.SIZE_12,
                  color: COLORS.gray.black,
                }}
              >
                15s ago
              </Text>
            </View>
            <View style={{ width: 100, alignSelf: "flex-end" }}>
              <Text
                style={{
                  fontSize: SIZES.SIZE_14,
                  color: COLORS.gray.black,
                  flexWrap: "wrap",
                  fontWeight: 510,
                }}
              >
                Total: $300.00
              </Text>
            </View>
            <Image
              source={IMAGES.icons.rightArrow}
              style={{ width: 16, height: 16, alignSelf: "flex-end" }}
            />
          </View>
        </View>
      </View>
    </CommonAppLayout>
  );
}
