import React, { useState } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Header } from "@/components/header/Header";
import { IMAGES } from "@/assets/Images";
import { SIZES, WEIGHTS } from "@/constants/Font";
import { COLORS } from "@/constants/Colors";
import CommonAppLayout from "@/components/common/CommonAppLayout";
import PaymentMethod from "@/components/common/PaymentMethod"; // Import the component for displaying payment methods
import { HeaderLeftIcon } from "@/components/header/HeaderLeftIcon";
import CommonButtonWithLinks from "@/components/common/CommonButtonWithLinks";
import CommonInput from "@/components/common/CommonInput";
import CommonModal from "@/components/common/CommonModal";
import { UserAppStateContext } from "@/contexts/MockAppState";
import { useContext } from "react";

export default function TransferToRewards() {
  const router = useRouter();
  const { mockAppState, setMockAppState } = useContext(UserAppStateContext);
  const [selectedSource, setSelectedSource] = useState<{
    id: string;
    imageSource: any;
    title: string;
    subtitle: string;
  } | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<{
    id: string;
    imageSource: any;
    title: string;
    subtitle: string;
  } | null>(null);
  const [amount, setAmount] = useState("");
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  // Define payment methods and rewards cards with unique IDs
  const paymentMethods = [
    {
      id: "1",
      imageSource: IMAGES.payments.visa,
      title: "VISA Card",
      subtitle: "1234 5678 9101 1213",
    },
    {
      id: "2",
      imageSource: IMAGES.demos.bofa,
      title: "Bank of America",
      subtitle: "1234567891011213",
    },
  ];

  const rewardMethods = [
    {
      id: "1",
      imageSource: IMAGES.demos.lexis,
      title: "Lexi's",
      subtitle: "Available Balance: $150",
    },
    {
      id: "2",
      imageSource: IMAGES.demos.eegees,
      title: "Eegees",
      subtitle: "Available Balance: $150",
    },
    // Add more reward methods as needed
  ];

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
          Deposit funds from your card or bank account to your uKnomi Balance.
        </Text>
      </View>

      <Text
        style={{
          textAlign: "center",
          fontWeight: WEIGHTS.SEMI_BOLD,
          fontSize: SIZES.SIZE_16,
        }}
      >
        Balance: ${mockAppState.uKnomiBalance}
      </Text>

      {/* Source Section: Card or Bank Account */}
      <View style={{ marginTop: 24 }}>
        <Text
          style={{
            fontSize: SIZES.SIZE_17,
            fontWeight: WEIGHTS.BOLD,
            marginBottom: 16,
          }}
        >
          Choose Source
        </Text>
        <View style={{ gap: 8 }}>
          {paymentMethods.map((method) => (
            <PaymentMethod
              key={method.id}
              style={[
                styles.paymentMethodContainer,
                selectedSource?.id === method.id &&
                  styles.selectedPaymentMethod,
              ]}
              imageSource={method.imageSource}
              title={method.title}
              subtitle={method.subtitle}
              onPress={() => setSelectedSource(method)}
            />
          ))}
        </View>
      </View>

      {/* Amount Input */}
      <View style={{ marginTop: 24 }}>
        <Text
          style={{
            fontSize: SIZES.SIZE_17,
            fontWeight: WEIGHTS.BOLD,
            marginBottom: 8,
          }}
        >
          Amount
        </Text>
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

      {/* Transfer Button */}
      <View style={{ marginTop: 48, alignItems: "center" }}>
        <CommonButtonWithLinks
          text={"Deposit"}
          onPress={() => {
            setModalVisible(true);
            // Handle the transfer action here
            console.log("Transfer initiated", {
              amount,
              selectedSource,
              selectedDestination,
            });
          }}
        />
      </View>
      <CommonModal
        modalVisible={modalVisible}
        onClose={() => {
          setModalVisible(false);
        }}
      >
        <Text style={{ paddingBottom: 24, textAlign: "center" }}>
          You are depositing ${parseFloat(amount).toFixed(2)} from{" "}
          {selectedSource?.title}. Is that correct?
        </Text>

        <CommonButtonWithLinks
          text={"Confirm"}
          onPress={() => {
            setModalVisible(false);
            setSelectedDestination(null);
            setSelectedSource(null);
            setAmount("");
            setMockAppState((val: any) => {
              return {
                ...val,
                uKnomiBalance: `${(parseFloat(amount) + parseFloat(val.uKnomiBalance)).toFixed(2)}`,
              };
            });

            // Handle the transfer action here
            console.log("Transfer initiated", {
              amount,
              selectedSource,
              selectedDestination,
            });
          }}
        />
      </CommonModal>
    </CommonAppLayout>
  );
}

const styles = StyleSheet.create({
  paymentMethodContainer: {
    borderColor: COLORS.gray.lightGray,
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    backgroundColor: COLORS.gray.white,
  },
  selectedPaymentMethod: {
    borderColor: COLORS.semantic.green,
  },
});
