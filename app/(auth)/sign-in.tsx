import React from "react";
import { Text, View } from "react-native";
import { useRouter } from "expo-router";
import { Header } from "@/components/header/Header";
import { Logo } from "@/components/header/Logo";
import { IMAGES } from "@/assets/Images"; // Ensure this import path is correct
import { SIZES } from "@/constants/Font"; // Ensure this import path is correct
import CommonAppLayout from "@/components/common/CommonAppLayout";
import CommonLink from "@/components/common/CommonLink";
import CommonButtonWithLinks from "@/components/common/CommonButtonWithLinks";
import { HeaderLeftIcon } from "@/components/header/HeaderLeftIcon";
import { ROUTES } from "@/constants/Routes";
import PageTitleSection from "@/components/common/CommonPageTitleSection";
import CustomInput from "@/components/common/CommonInput";
import Checkbox from "expo-checkbox";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isChecked, setChecked] = React.useState(false);

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
            title="Welcome to Your uKnomi Wallet"
            description="Sign in to manage your cards"
            titleStyle={{
              fontSize: SIZES.SIZE_32,
            }}
            descriptionStyle={{
              maxWidth: 270,
            }}
          />
        </View>
        <View style={{ width: "100%", gap: 24 }}>
          <CustomInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email or mobile number"
            icon={IMAGES.icons.lightProfile}
          />
          <CustomInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            isPassword={true}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 8,
              }}
            >
              <Checkbox
                value={isChecked}
                onValueChange={setChecked}
                style={{
                  borderRadius: 24,
                }}
              />
              <CommonLink
                text="Remember me"
                onPress={() => {
                  setChecked((prev) => !prev);
                }}
              />
            </View>
            <CommonLink
              text="Forgot your password?"
              onPress={() => {
                router.push(ROUTES.AUTH_FORGOT_PASSWORD);
              }}
            />
          </View>
        </View>
        <CommonButtonWithLinks
          text="Sign In"
          onPress={() => router.push(ROUTES.WALLET)}
        >
          <CommonLink text="Sign in with Face ID" onPress={() => {}} />
          <Text style={{ textAlign: "center" }}>
            Not registered?{" "}
            <CommonLink
              text="Sign up"
              onPress={() => {
                router.push(ROUTES.AUTH_SIGN_UP);
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
