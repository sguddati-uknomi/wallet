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
import CommonInput from "@/components/common/CommonInput";
import PaymentMethod from "@/components/common/PaymentMethod"; // Import the new component
import { PARAM, ROUTES } from "@/constants/Routes";
import CommonModal from "@/components/common/CommonModal";
import CommonPageTitleSection from "@/components/common/CommonPageTitleSection";

export default function PaymentMethods() {
  const router = useRouter();
  const [isAutoPayEnabled, setAutoPayEnablement] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [amount, setAmount] = React.useState("");

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
          onPress={() => {
            setModalVisible(true);
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
        <CommonInput
          isMinimalistic
          inputBackgroundColor={COLORS.gray.white}
          inputTextColor={COLORS.gray.black}
          value={`$${amount}`}
          onChangeText={(text) => setAmount(text.replace("$", ""))}
          placeholder="0.00"
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
            Your Bank Cards
          </Text>
          <CommonLink
            text="Add"
            onPress={() => {
              router.push(ROUTES.ACCOUNT_PAYMENT_METHODS_ADD_CARD);
            }}
          />
        </View>
        <View style={{ gap: 8 }}>
          {/* <Text>You haven't loaded any credit cards yet.</Text> */}
          <PaymentMethod
            onPress={() => {
              router.push(
                ROUTES.ACCOUNT_PAYMENT_METHODS_EDIT_CARD.replace(
                  PARAM.PAYMENT_METHOD_ID,
                  "4124"
                ) + "?method=card"
              );
            }}
            imageSource={IMAGES.payments.visa}
            title="VISA Card"
            subtitle="1234 5678 9101 1213"
          />
        </View>
      </View>
      <View style={{ marginTop: 24 }}>
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
            Your Bank Accounts
          </Text>
          <CommonLink
            text="Add"
            onPress={() => {
              router.push(
                ROUTES.ACCOUNT_PAYMENT_METHODS_ADD_CARD + "?method=bank"
              );
            }}
          />
        </View>
        <View style={{ gap: 8 }}>
          {/* <Text>You haven't loaded any bank accounts yet.</Text> */}
          <PaymentMethod
            onPress={() => {
              router.push(
                ROUTES.ACCOUNT_PAYMENT_METHODS_EDIT_CARD.replace(
                  PARAM.PAYMENT_METHOD_ID,
                  "14142"
                ) + "?method=bank"
              );
            }}
            imageSource={IMAGES.demos.bofa}
            title="Bank of America"
            subtitle="1234567891011213"
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
      <CommonModal
        modalVisible={modalVisible}
        onClose={() => setModalVisible(false)}
      >
        <CommonPageTitleSection
          containerStyle={{
            marginTop: -18,
          }}
          titleStyle={{
            fontSize: SIZES.SIZE_14,
            fontWeight: WEIGHTS.BOLD,
          }}
          descriptionStyle={{
            fontSize: SIZES.SIZE_12,
            fontWeight: WEIGHTS.REGULAR,
          }}
          title={"Auto-Pay Limit"}
          description="Amounts lower than your set limit will automatically be approved. When amounts exceed your set limit, then we’ll prompt you for approval."
        />
      </CommonModal>
    </CommonAppLayout>
  );
}
