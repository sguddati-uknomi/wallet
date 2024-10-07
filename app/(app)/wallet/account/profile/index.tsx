import React from "react";
import { View, StyleProp, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Header } from "@/components/header/Header";
import { Logo } from "@/components/header/Logo";
import { IMAGES } from "@/assets/Images"; // Ensure this import path is correct
import { SIZES, WEIGHTS } from "@/constants/Font"; // Ensure this import path is correct
import CommonAppLayout from "@/components/common/CommonAppLayout";
import CommonLink from "@/components/common/CommonLink";
import CommonButtonWithLinks from "@/components/common/CommonButtonWithLinks";
import { HeaderLeftIcon } from "@/components/header/HeaderLeftIcon";
import { ROUTES } from "@/constants/Routes";
import PageTitleSection from "@/components/common/CommonPageTitleSection";
import { COLORS } from "@/constants/Colors";
import CustomInput from "@/components/common/CommonInput";

export default function PaymentMethodAdd() {
  const router = useRouter();
  const [formValues, setFormValues] = React.useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    phoneNumber: "",
  });

  const handleInputChange = (field: any, value: any) => {
    setFormValues({
      ...formValues,
      [field]: value,
    });
  };

  const handleSave = (values: any) => {
    // Save the form values
    console.log("Form saved:", values);
  };

  const handleRemove = () => {
    // Handle remove action
    console.log("Form removed");
  };

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
      {/* <View
        style={{
          flex: 1,
        }}
      > */}
      <View
        style={{
          height: 108,
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 16,
        }}
      >
        <Image
          style={{ width: 108, height: 108, zIndex: 1 }}
          contentFit="contain"
          source={require("@/assets/images/image copy.png")}
        />
        <View
          style={{
            zIndex: 1,
            width: 93,
            height: 93,
            position: "absolute",
            borderRadius: 64,
            left: 8,
            top: 3,
          }}
        >
          <Image
            source={
              "https://media.licdn.com/dms/image/v2/D5603AQFp9wO-pc9YOQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1676594939943?e=2147483647&v=beta&t=waTPq99YJ1ZSKEa7j9rnCefLyCdJLlKCXvdBJ9o0_qQ"
            }
            style={{ width: "100%", height: "100%", borderRadius: 64 }}
            contentFit="cover"
          />
        </View>
        <Text
          style={{
            fontSize: SIZES.SIZE_17,
            fontWeight: WEIGHTS.BOLD,
            width: 200,
          }}
        >
          Fernando Portillo
        </Text>
      </View>
      <ProfileForm
        formValues={formValues}
        onInputChange={handleInputChange}
        onPrimaryButton={handleSave}
        onSecondaryButton={handleRemove}
      />
      {/* </View> */}
    </CommonAppLayout>
  );
}

const ProfileForm = ({
  formValues,
  onInputChange,
  onPrimaryButton,
  onSecondaryButton,
  isAddingNewCar = true,
}: any) => {
  return (
    <View style={{ flex: 1 }}>
      <View>
        <View style={{ gap: 12, marginVertical: 24 }}>
          <CustomInput
            label="First Name"
            isMinimalistic
            inputBackgroundColor={COLORS.gray.white}
            value={formValues.licensePlate}
            placeholder="Joe"
            inputTextColor={COLORS.gray.black}
            onChangeText={(value) => onInputChange("firstName", value)}
          />

          <CustomInput
            style={{ flex: 1 }}
            label="Last Name"
            isMinimalistic
            inputBackgroundColor={COLORS.gray.white}
            value={formValues.make}
            placeholder="Doe"
            inputTextColor={COLORS.gray.black}
            onChangeText={(value) => onInputChange("lastName", value)}
          />
          <CustomInput
            style={{ flex: 1 }}
            label="Date of Birth"
            isMinimalistic
            inputBackgroundColor={COLORS.gray.white}
            value={formValues.model}
            placeholder="November 24, 1988"
            inputTextColor={COLORS.gray.black}
            onChangeText={(value) => onInputChange("dateOfBirth", value)}
          />
          <CustomInput
            style={{ flex: 1 }}
            label="Email"
            isMinimalistic
            inputBackgroundColor={COLORS.gray.white}
            value={formValues.color}
            placeholder="janedoe@gmail.com"
            inputTextColor={COLORS.gray.black}
            onChangeText={(value) => onInputChange("email", value)}
          />
          <CustomInput
            style={{ flex: 1 }}
            label="Phone Number"
            isMinimalistic
            inputBackgroundColor={COLORS.gray.white}
            value={formValues.color}
            placeholder="000 000 0000"
            inputTextColor={COLORS.gray.black}
            inputMode="tel"
            onChangeText={(value) => onInputChange("phoneNumber", value)}
          />
        </View>
      </View>
      <CommonButtonWithLinks
        text={"Save"}
        onPress={() => onPrimaryButton(formValues)}
      />
    </View>
  );
};
