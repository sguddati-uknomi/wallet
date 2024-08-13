import React from "react";
import {
  Text,
  Button,
  Image,
  View,
  TextInputProps,
  TextInput,
  StyleProp,
} from "react-native";
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
import Checkbox from "expo-checkbox";

export default function Email() {
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
            title="Introduce Yourself"
            description="A great journey starts with a single step. Let’s get to know you better."
            titleStyle={{
              fontSize: SIZES.SIZE_32,
            }}
            descriptionStyle={{
              maxWidth: 270,
            }}
          />
          <ProgressIndicator stepsCompleted={1} totalSteps={6} />
        </View>
        <CustomInput
          value={email}
          onChangeText={setEmail}
          placeholder=""
          inputTextColor={COLORS.gray.black}
          isMinimalistic={true}
          label="Enter email or Mobile Number" // This will be displayed above the input field
          inputBackgroundColor="white"
        />
        <CommonButtonWithLinks
          text="Next"
          onPress={() => router.push(ROUTES.AUTH_SIGN_UP_VERIFY_EMAIL)}
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
