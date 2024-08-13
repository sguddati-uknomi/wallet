import React from "react";
import { Text, Button, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter } from "expo-router";
import { Header } from "@/components/header/Header";
import { Logo } from "@/components/header/Logo";
import { IMAGES } from "@/assets/Images"; // Ensure this import path is correct
import { StatusBar } from "react-native";
import { TouchableOpacity } from "react-native";
import { COLORS } from "@/constants/Colors";
import { SIZES, WEIGHTS } from "@/constants/Font"; // Ensure this import path is correct
import CommonAppLayout from "@/components/common/CommonAppLayout";
import CommonLink from "@/components/common/CommonLink";
import CommonButtonWithLinks from "@/components/common/CommonButtonWithLinks";
import { HeaderLeftIcon } from "@/components/header/HeaderLeftIcon";
import { ROUTES } from "@/constants/Routes";
import PageTitleSection from "@/components/common/CommonPageTitleSection";
import ProgressIndicator from "@/components/common/ProgressIndicator";
import CustomInput from "@/components/common/CommonInput";

export default function VerifyEmail() {
  const router = useRouter();
  const [verficationCode, setVerificationCode] = React.useState("");
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
        <View>
          <PageTitleSection
            title="Verify Email"
            titleStyle={{
              fontSize: SIZES.SIZE_32,
            }}
            description="A verification code was sent to j****@gmail.com"
          />
          <ProgressIndicator stepsCompleted={2} totalSteps={6} />
        </View>
        <CustomInput
          value={verficationCode}
          onChangeText={setVerificationCode}
          placeholder=""
          inputTextColor={COLORS.gray.black}
          isMinimalistic={true}
          label="Verification Code" // This will be displayed above the input field
          inputBackgroundColor="white"
        />
        <CommonButtonWithLinks
          text="Next"
          onPress={() => router.push(ROUTES.AUTH_CREATE_PASSWORD)}
        >
          <Text style={{ textAlign: "center" }}>
            Didn't receive the code?{" "}
            <CommonLink text="Resend code" onPress={() => {}} />
          </Text>
        </CommonButtonWithLinks>
      </View>
    </CommonAppLayout>
  );
}