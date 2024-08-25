import React from "react";
import { Image, View, Text } from "react-native";
import { IMAGES } from "@/assets/Images"; // Ensure this import path is correct
import { SIZES, WEIGHTS } from "@/constants/Font"; // Ensure this import path is correct
import { COLORS } from "@/constants/Colors";
import CustomInput from "@/components/common/CommonInput";
import CommonButtonWithLinks from "@/components/common/CommonButtonWithLinks";
import CommonLink from "@/components/common/CommonLink";

const RegisterCarForm = ({
  formValues,
  onInputChange,
  onPrimaryButton,
  onSecondaryButton,
  isAddingNewCar = true,
}: any) => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <View style={{ marginTop: 12 }}>
          <Text
            style={{
              fontSize: SIZES.SIZE_14,
              fontWeight: WEIGHTS.REGULAR,
              color: COLORS.gray.midGray,
            }}
          >
            Front
          </Text>
          <View
            style={{
              width: 120,
              height: 120,
              padding: 1,
              borderWidth: 4,
              borderColor: COLORS.gray.lightGray,
              marginTop: 4,
            }}
          >
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
                zIndex: 1,
              }}
            >
              <Image
                style={{ width: 16, height: 16 }}
                source={IMAGES.icons.lightCamera}
                resizeMode="contain"
              />
            </View>
            <Image
              style={{
                zIndex: 0,
                width: 108,
                height: 108,
                alignSelf: "center",
              }}
              source={IMAGES.icons.lightEmptyCar}
              resizeMode="cover"
            />
          </View>
        </View>
        <View style={{ marginTop: 12 }}>
          <Text
            style={{
              fontSize: SIZES.SIZE_14,
              fontWeight: WEIGHTS.REGULAR,
              color: COLORS.gray.midGray,
            }}
          >
            Rear
          </Text>
          <View
            style={{
              width: 120,
              height: 120,
              padding: 1,
              borderWidth: 4,
              borderColor: COLORS.gray.lightGray,
              marginTop: 4,
            }}
          >
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
                zIndex: 1,
              }}
            >
              <Image
                style={{ width: 16, height: 16 }}
                source={IMAGES.icons.lightCamera}
                resizeMode="contain"
              />
            </View>
            <Image
              style={{
                zIndex: 0,
                width: 108,
                height: 108,
                alignSelf: "center",
              }}
              source={IMAGES.icons.lightEmptyCar}
              resizeMode="cover"
            />
          </View>
        </View>
      </View>
      <View>
        <View style={{ gap: 12, marginVertical: 24 }}>
          <CustomInput
            label="License Plate"
            isMinimalistic
            inputBackgroundColor={COLORS.gray.white}
            value={formValues.licensePlate}
            placeholder="BL0166"
            inputTextColor={COLORS.gray.black}
            onChangeText={(value) => onInputChange("licensePlate", value)}
          />

          <CustomInput
            style={{ flex: 1 }}
            label="Make (Optional)"
            isMinimalistic
            inputBackgroundColor={COLORS.gray.white}
            value={formValues.make}
            placeholder="Land Rover"
            inputTextColor={COLORS.gray.black}
            onChangeText={(value) => onInputChange("make", value)}
          />
          <CustomInput
            style={{ flex: 1 }}
            label="Model (Optional)"
            isMinimalistic
            inputBackgroundColor={COLORS.gray.white}
            value={formValues.model}
            placeholder="Range Rover Evoque"
            inputTextColor={COLORS.gray.black}
            onChangeText={(value) => onInputChange("model", value)}
          />
          <CustomInput
            style={{ flex: 1 }}
            label="Color (Optional)"
            isMinimalistic
            inputBackgroundColor={COLORS.gray.white}
            value={formValues.color}
            placeholder="Silver"
            inputTextColor={COLORS.gray.black}
            onChangeText={(value) => onInputChange("color", value)}
          />
        </View>
      </View>
      <CommonButtonWithLinks
        text={isAddingNewCar ? "Add Car" : "Save"}
        onPress={() => onPrimaryButton(formValues)}
      >
        <CommonLink
          text={isAddingNewCar ? "Now now, thanks" : "Remove"}
          color={
            isAddingNewCar ? COLORS.semantic.blue : COLORS.secondary.burntRed
          }
          onPress={onSecondaryButton}
        />
      </CommonButtonWithLinks>
    </View>
  );
};

export default RegisterCarForm;
