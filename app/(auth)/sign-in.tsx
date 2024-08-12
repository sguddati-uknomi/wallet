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

export default function SignIn() {
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
                <PageTitleSection title="Welcome to Your uKnomi Wallet" titleStyle={{
                    fontSize: SIZES.SIZE_32,
                }} description="Sign in to manage your cards" />
                <CommonButtonWithLinks
                    text="Sign In"
                    onPress={() => router.push(ROUTES.AUTH_SIGN_IN)}
                >
                    <CommonLink
                        text="Sign in with Face ID"
                        onPress={() => router.push(ROUTES.AUTH_SIGN_IN)}
                    />
                    <Text style={{ textAlign: "center" }}>
                        Not Registered?  <CommonLink
                            text="Sign up"
                            onPress={() => router.push(ROUTES.AUTH_SIGN_UP)}
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
