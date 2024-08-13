import React from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";
import { Header } from "@/components/header/Header";
import { Logo } from "@/components/header/Logo";
import CommonAppLayout from "@/components/common/CommonAppLayout";
import CommonLink from "@/components/common/CommonLink";
import CommonButtonWithLinks from "@/components/common/CommonButtonWithLinks";
import OnboardingStep from "@/components/onboarding/OnboardingStep";
import { ROUTES } from "@/constants/Routes";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <CommonAppLayout header={<Header middleComponent={<Logo />} />}>
      <View
        style={{
          flex: 1,
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <OnboardingStep
          title="Welcome to uKnomi"
          description="Say hello to easy ordering, personalized choices and cash-back rewards"
          stepsCompleted={1}
        />
        <CommonButtonWithLinks
          text="Next"
          onPress={() => router.push(ROUTES.ONBOARDING_PAIN)}
        >
          <CommonLink
            text="Skip and get started"
            onPress={() => router.push(ROUTES.AUTH_SIGN_UP)}
          />
        </CommonButtonWithLinks>
      </View>
    </CommonAppLayout>
  );
}
