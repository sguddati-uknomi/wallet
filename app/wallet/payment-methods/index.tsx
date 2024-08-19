import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Header } from "@/components/header/Header";
import { IMAGES } from "@/assets/Images"; // Ensure this import path is correct
import { SIZES, WEIGHTS } from "@/constants/Font"; // Ensure this import path is correct
import { COLORS } from "@/constants/Colors";
import CommonAppLayout from "@/components/common/CommonAppLayout";
import CommonLink from "@/components/common/CommonLink";
import { HeaderLeftIcon } from "@/components/header/HeaderLeftIcon";
import CustomSwitch from "@/components/common/Switch";
import CustomInput from "@/components/common/CommonInput";
import PaymentMethod from "@/components/common/PaymentMethod"; // Import the new component
import { ROUTES } from "@/constants/Routes";

export default function PaymentMethods() {
  const router = useRouter();
  const [isAutoPayEnabled, setAutoPayEnablement] = React.useState(false);

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
      <View style={{ alignItems: "center", marginBottom: 24 }}>
        <Image
          style={{ width: 124, alignSelf: "center" }}
          source={IMAGES.uKnomiPayLogo}
          resizeMode="contain"
        />
        <Text
          style={{ textAlign: "center", width: 248, color: COLORS.gray.black }}
        >
          Enjoy a seamless dining experience with our easy auto-pay option
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Text style={{ fontSize: SIZES.SIZE_17, fontWeight: WEIGHTS.BOLD }}>
          Allow Auto-Pay
        </Text>
        <CustomSwitch
          small
          value={isAutoPayEnabled}
          onValueChange={setAutoPayEnablement}
        />
      </View>
      <View style={{ paddingVertical: 12 }}>
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 8,
            paddingVertical: 8,
          }}
        >
          <Text
            style={{
              fontSize: SIZES.SIZE_14,
              fontWeight: WEIGHTS.REGULAR,
              color: COLORS.semantic.blue,
            }}
          >
            Set Auto Pay Limit
          </Text>
          <Image
            style={{ width: 16, height: 16, alignSelf: "center" }}
            source={IMAGES.icons.lightInfo}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <CustomInput
          isMinimalistic
          inputBackgroundColor={COLORS.gray.white}
          value={""}
          placeholder="Optional"
          inputTextColor={COLORS.gray.black}
          onChangeText={() => {}}
          inputMode="decimal"
        />
      </View>
      <View>
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            marginBottom: 16,
          }}
        >
          <Text
            style={{
              fontSize: SIZES.SIZE_14,
              fontWeight: WEIGHTS.SEMI_BOLD,
              color: COLORS.loyalty.silver,
            }}
          >
            Your Credit Cards
          </Text>
          <CommonLink
            text="Add"
            onPress={() => {
              router.push(ROUTES.ACCOUNT_PAYMENT_METHODS_ADD_CARD);
            }}
          />
        </View>
        <View style={{ gap: 8 }}>
          <PaymentMethod
            onPress={() => {}}
            imageSource={IMAGES.payments.visa}
            title="VISA Card"
            subtitle="1234 5678 9101 1213"
          />
        </View>
      </View>
      <View style={{ marginTop: 24 }}>
        <View
          style={{
            marginBottom: 16,
          }}
        >
          <Text
            style={{
              fontSize: SIZES.SIZE_14,
              fontWeight: WEIGHTS.SEMI_BOLD,
              color: COLORS.loyalty.silver,
            }}
          >
            Other Payment Options
          </Text>
        </View>
        <View style={{ gap: 8 }}>
          <PaymentMethod
            onPress={() => {}}
            imageSource={IMAGES.payments.paypal}
            title="PayPal"
            subtitle="Add PayPal"
          />
          <PaymentMethod
            onPress={() => {}}
            imageSource={IMAGES.payments.applePay}
            title="Apple Pay"
            subtitle="Add Apple Pay"
          />
        </View>
      </View>
    </CommonAppLayout>
  );
}
