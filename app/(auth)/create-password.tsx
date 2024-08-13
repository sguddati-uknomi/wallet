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

export default function CreatePassword() {
  const router = useRouter();
  const [password, setPassword] = React.useState("");
  const [secondPassword, setSecondPassword] = React.useState("");

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
            title="Create Password"
            titleStyle={{
              fontSize: SIZES.SIZE_32,
            }}
            description="Secure your account with a strong password"
          />
          <ProgressIndicator stepsCompleted={3} totalSteps={6} />
        </View>
        <View style={{ width: "100%", gap: 24 }}>
          <CustomInput
            value={password}
            onChangeText={setPassword}
            placeholder=""
            inputTextColor={COLORS.gray.black}
            isMinimalistic={true}
            label="Enter Password" // This will be displayed above the input field
            inputBackgroundColor="white"
            isPassword
          />
          <CustomInput
            value={secondPassword}
            onChangeText={setSecondPassword}
            placeholder=""
            inputTextColor={COLORS.gray.black}
            isMinimalistic={true}
            label="Retype Password" // This will be displayed above the input field
            inputBackgroundColor="white"
            isPassword
          />
        </View>
        <CommonButtonWithLinks
          text="Next"
          onPress={() => router.push(ROUTES.AUTH_ENABLE_LOCATION)}
        >
          <Text style={{ textAlign: "center" }}>
            Already a user?{" "}
            <CommonLink
              text="Sign in"
              onPress={() => {
                router.dismiss(1);
                router.push(ROUTES.AUTH_SIGN_IN);
              }}
            />
          </Text>
          <CommonLink
            text="Continue without Signing Up"
            onPress={() => router.push(ROUTES.AUTH_SIGN_IN)}
          />
        </CommonButtonWithLinks>
      </View>
    </CommonAppLayout>
  );
}