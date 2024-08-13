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

export default function ForgotPassword() {
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isChecked, setChecked] = React.useState(false);

  return (
    <CommonAppLayout>
      <Header
        leftComponent={<HeaderLeftIcon onPress={() => router.dismiss()} />}
        middleComponent={<Logo />}
      />
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
