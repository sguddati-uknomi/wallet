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
import ProgressIndicator from "@/components/common/ProgressIndicator";
import { HeaderLeftIcon } from "@/components/header/HeaderLeftIcon";
import OnboardingStep from "@/components/onboarding/OnboardingStep";
import { ROUTES } from "@/constants/Routes";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <CommonAppLayout>
      <Header leftComponent={<HeaderLeftIcon onPress={() => router.dismiss()} />} middleComponent={<Logo />} />
      <View
        style={{
          flex: 1,
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <OnboardingStep
          title="You are more than just a number"
          description="uKnomi helps your favorite restaurants get to know you, not just your order number"
          stepsCompleted={2}
        />
        <CommonButtonWithLinks
          text="Next"
          onPress={() => router.push(ROUTES.ONBOARDING_VALUE_PROP)}
        >
          <CommonLink
            text="Skip and get started"
            onPress={() => router.push(ROUTES.AUTH_SIGN_IN)}
          />
        </CommonButtonWithLinks>
      </View>
    </CommonAppLayout>
  );
}
