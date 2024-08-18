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
import IconText from "@/components/common/IconText";

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
        <View
          style={{
            width: "100%",
            gap: 8,
            marginTop: -16,
          }}
        >
          <IconText
            icon={IMAGES.icons.lightCheck}
            text="Contains at least 8 characters"
            iconSize={16}
          />
          <IconText
            icon={IMAGES.icons.lightCheck}
            text="Contains an upper case letter"
            iconSize={16}
            containerStyle={{ width: "100%" }}
          />
          <IconText
            icon={IMAGES.icons.lightCheck}
            text="Contains a lower case letter"
            iconSize={16}
            textStyle={{
              color: COLORS.gray.faintGrey,
            }}
            containerStyle={{ width: "100%" }}
          />
          <IconText
            icon={IMAGES.icons.lightCheck}
            text="Contains a special character"
            iconSize={16}
            textStyle={{
              color: COLORS.gray.faintGrey,
            }}
            containerStyle={{ width: "100%" }}
          />
          <IconText
            icon={IMAGES.icons.lightCheck}
            text="Contains a number"
            iconSize={16}
            textStyle={{
              color: COLORS.gray.faintGrey,
            }}
            containerStyle={{ width: "100%" }}
          />
        </View>
        <CommonButtonWithLinks
          text="Next"
          onPress={() => router.push(ROUTES.AUTH_ENABLE_LOCATION)}
        />
      </View>
    </CommonAppLayout>
  );
}
