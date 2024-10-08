import React, { useEffect } from "react";
import { Image, View, StyleProp } from "react-native";
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
import ProgressIndicator from "@/components/common/ProgressIndicator";
import useBLE from "@/hooks/useBLE";

export default function EnableBluetooth() {
  const router = useRouter();
  const { requestPermissions } = useBLE();

  async function requestBluetoothPermission() {
    const result = await requestPermissions();

    if (result) {
      router.push(ROUTES.AUTH_ENABLE_NOTIFICATIONS);
    }
  }

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
            title="Enable Bluetooth"
            titleStyle={{
              fontSize: SIZES.SIZE_32,
            }}
            description="To give you a personalized experience, we use Bluetooth to triangulate your location"
          />
          <ProgressIndicator stepsCompleted={5} totalSteps={6} />
        </View>
        <CommonButtonWithLinks
          text="Enable"
          onPress={() => requestBluetoothPermission()}
        >
          <CommonLink
            text="Not now, thanks"
            onPress={() => router.push(ROUTES.AUTH_ENABLE_NOTIFICATIONS)}
          />
        </CommonButtonWithLinks>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={IMAGES.enableBluetooth}
            resizeMode="contain"
          />
        </View>
      </View>
    </CommonAppLayout>
  );
}

const styles = {
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 36, // Added margin to separate image from text
  },
  image: {
    width: 290,
    height: 268,
  },
} as StyleProp<any>;
