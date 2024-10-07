import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { IMAGES } from "@/assets/Images"; // Ensure this import path is correct
import { SIZES, WEIGHTS } from "@/constants/Font"; // Ensure this import path is correct
import { COLORS } from "@/constants/Colors";
import CustomInput from "@/components/common/CommonInput";
import CommonButtonWithLinks from "@/components/common/CommonButtonWithLinks";
import CommonLink from "@/components/common/CommonLink";

const PaymentMethodForm = ({
  method = "card",
  formValues,
  onInputChange,
  onSave,
  onRemove,
}: any) => {
  return (
    <View style={{ flex: 1 }}>
      {method === "card" ? (
        <>
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                width: 280,
                height: 184,
                borderWidth: 4,
                borderRadius: 12,
                borderColor: COLORS.primary.uKnomiLogoGreen,
                marginTop: 12,
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: SIZES.SIZE_14,
                    fontWeight: WEIGHTS.REGULAR,
                    color: COLORS.gray.midGray,
                  }}
                >
                  Capture Your Card
                </Text>
              </View>
              <View
                style={{
                  position: "absolute",
                  width: 32,
                  height: 32,
                  borderRadius: 16,
                  backgroundColor: COLORS.primary.uKnomiLogoGreen,
                  right: -16,
                  top: -16,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{ width: 16, height: 16 }}
                  source={IMAGES.icons.lightCamera}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>
          <View>
            <View
              style={{
                flexDirection: "row",
                display: "flex",
                gap: 16,
                marginVertical: 16,
                justifyContent: "center",
              }}
            >
              <TouchableOpacity>
                <Image
                  style={{ width: 60, height: 48 }}
                  source={IMAGES.payments.visa}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={{ width: 60, height: 48 }}
                  source={IMAGES.payments.mastercard}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
            <View style={{ gap: 12, marginBottom: 24 }}>
              <CustomInput
                label="Card Number"
                isMinimalistic
                inputBackgroundColor={COLORS.gray.white}
                value={formValues.cardNumber}
                placeholder="0000 0000 0000 0000"
                inputTextColor={COLORS.gray.black}
                onChangeText={(value) => onInputChange("cardNumber", value)}
              />
              <View style={{ display: "flex", flexDirection: "row", gap: 24 }}>
                <CustomInput
                  style={{ flex: 1 }}
                  label="Expiry Date"
                  isMinimalistic
                  inputBackgroundColor={COLORS.gray.white}
                  value={formValues.expiryDate}
                  placeholder="MM/YY"
                  inputTextColor={COLORS.gray.black}
                  onChangeText={(value) => onInputChange("expiryDate", value)}
                />
                <CustomInput
                  style={{ flex: 1 }}
                  label="CVC"
                  isMinimalistic
                  inputBackgroundColor={COLORS.gray.white}
                  value={formValues.cvc}
                  placeholder="000"
                  inputTextColor={COLORS.gray.black}
                  onChangeText={(value) => onInputChange("cvc", value)}
                />
              </View>
              <CustomInput
                style={{ flex: 1 }}
                label="Name on Card"
                isMinimalistic
                inputBackgroundColor={COLORS.gray.white}
                value={formValues.nameOnCard}
                placeholder="John Doe"
                inputTextColor={COLORS.gray.black}
                onChangeText={(value) => onInputChange("nameOnCard", value)}
              />
            </View>
          </View>
        </>
      ) : (
        <>
          <View style={{ gap: 12, marginBottom: 24, marginTop: 24 }}>
            <CustomInput
              label="Routing Number"
              isMinimalistic
              inputBackgroundColor={COLORS.gray.white}
              value={formValues.routingNumber}
              placeholder="00000000000"
              inputTextColor={COLORS.gray.black}
              onChangeText={(value) => onInputChange("routingNumber", value)}
            />
            <CustomInput
              style={{ flex: 1 }}
              label="Account Number"
              isMinimalistic
              inputBackgroundColor={COLORS.gray.white}
              value={formValues.accountNumber}
              placeholder="00000000000"
              inputTextColor={COLORS.gray.black}
              onChangeText={(value) => onInputChange("accountNumber", value)}
            />
            <CustomInput
              style={{ flex: 1 }}
              label="Account Holder Name"
              isMinimalistic
              inputBackgroundColor={COLORS.gray.white}
              value={formValues.accountHolderName}
              placeholder="Jane Doe"
              inputTextColor={COLORS.gray.black}
              onChangeText={(value) =>
                onInputChange("accountHolderName", value)
              }
            />
          </View>
        </>
      )}
      <CommonButtonWithLinks text="Save" onPress={() => onSave(formValues)}>
        <CommonLink
          text="Remove"
          color={COLORS.darkMode.redError}
          onPress={onRemove}
        />
      </CommonButtonWithLinks>
    </View>
  );
};

export default PaymentMethodForm;
