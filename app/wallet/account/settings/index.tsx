import React, { useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import { Header } from "@/components/header/Header";
import { COLORS } from "@/constants/Colors";
import { SIZES } from "@/constants/Font";
import CommonAppLayout from "@/components/common/CommonAppLayout";
import { HeaderLeftIcon } from "@/components/header/HeaderLeftIcon";
import CustomSwitch from "@/components/common/Switch";
import { IMAGES } from "@/assets/Images";

export default function Settings() {
  const router = useRouter();

  // State for each toggle
  const [isFaceIDEnabled, setFaceIDEnabled] = useState(false);
  const [isBluetoothEnabled, setBluetoothEnabled] = useState(false);
  const [isLocationEnabled, setLocationEnabled] = useState(false);
  const [isNotificationsEnabled, setNotificationsEnabled] = useState(false);
  const [isAutoPayEnabled, setAutoPayEnabled] = useState(false);

  return (
    <CommonAppLayout
      style={{
        backgroundColor: COLORS.gray.lightGrayBackground,
      }}
      mainContentStyle={{
        backgroundColor: COLORS.gray.white,
        paddingHorizontal: 0,
        paddingTop: 0,
      }}
      header={
        <Header
          leftComponent={<HeaderLeftIcon onPress={() => router.dismiss()} />}
        />
      }
      scrollable
    >
      <View style={{ width: "100%" }}>
        <View style={styles.toggleContainer}>
          <Text style={styles.toggleLabel}>Enable Face ID</Text>
          <CustomSwitch
            value={isFaceIDEnabled}
            onValueChange={setFaceIDEnabled}
          />
        </View>
      </View>

      <View style={{ width: "100%" }}>
        <View style={styles.toggleContainer}>
          <Text style={styles.toggleLabel}>Enable Bluetooth</Text>
          <CustomSwitch
            value={isBluetoothEnabled}
            onValueChange={setBluetoothEnabled}
          />
        </View>
      </View>

      <View style={{ width: "100%" }}>
        <View style={styles.toggleContainer}>
          <Text style={styles.toggleLabel}>Enable Location</Text>
          <CustomSwitch
            value={isLocationEnabled}
            onValueChange={setLocationEnabled}
          />
        </View>
      </View>

      <View style={{ width: "100%" }}>
        <View style={styles.toggleContainer}>
          <Text style={styles.toggleLabel}>Allow Notifications</Text>
          <CustomSwitch
            value={isNotificationsEnabled}
            onValueChange={setNotificationsEnabled}
          />
        </View>
      </View>

      <View style={{ width: "100%" }}>
        <View style={[styles.toggleContainer, styles.lastToggleContainer]}>
          <Text style={styles.toggleLabel}>Enable Auto-pay</Text>
          <CustomSwitch
            value={isAutoPayEnabled}
            onValueChange={setAutoPayEnabled}
          />
        </View>
      </View>

      <View
        style={{ paddingHorizontal: 24, marginTop: 48, alignItems: "center" }}
      >
        <Image
          style={{
            width: 200,
            height: 160,
            alignSelf: "center",
            marginTop: 64,
          }}
          source={IMAGES.enableNotification}
          resizeMode="contain"
        />
      </View>
    </CommonAppLayout>
  );
}

const styles = StyleSheet.create({
  toggleContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingLeft: 48,
    paddingRight: 32,
    borderTopWidth: 1,
    borderColor: COLORS.gray.lightGray,
  },
  lastToggleContainer: {
    borderBottomWidth: 1,
  },
  toggleLabel: {
    color: COLORS.gray.black,
    fontSize: SIZES.SIZE_17,
  },
});
