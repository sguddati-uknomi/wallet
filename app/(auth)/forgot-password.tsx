import React from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";
import { Header } from "@/components/header/Header";
import { Logo } from "@/components/header/Logo";
import { IMAGES } from "@/assets/Images"; // Ensure this import path is correct
import { SIZES } from "@/constants/Font"; // Ensure this import path is correct
import CommonAppLayout from "@/components/common/CommonAppLayout";
import CommonButtonWithLinks from "@/components/common/CommonButtonWithLinks";
import { HeaderLeftIcon } from "@/components/header/HeaderLeftIcon";
import PageTitleSection from "@/components/common/CommonPageTitleSection";
import CustomInput from "@/components/common/CommonInput";

export default function ForgotPassword() {
  const router = useRouter();
  const [email, setEmail] = React.useState("");

  return (
    <CommonAppLayout
      header={
        <Header
          leftComponent={<HeaderLeftIcon onPress={() => router.dismiss()} />}
          middleComponent={<Logo />}
        />
      }
    >
      <View
        style={{
          flex: 1,
          gap: 48,
          paddingVertical: 64,
          alignItems: "center",
        }}
      >
        <PageTitleSection
          title="Reset Password"
          description="Enter your email or mobile number to reset your password"
          titleStyle={{
            fontSize: SIZES.SIZE_32,
          }}
        />
        <CustomInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email or mobile number"
          icon={IMAGES.icons.lightProfile}
        />
        <CommonButtonWithLinks text="Submit" onPress={() => router.dismiss()} />
      </View>
    </CommonAppLayout>
  );
}
