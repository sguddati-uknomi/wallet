import { ROUTES } from "@/constants/Routes";
import { Redirect, Stack } from "expo-router";
import React from "react";
import { Text } from "react-native";

export default function AppLayout() {
  const [isLoading, setLoading] = React.useState(false);
  const [session, setSession] = React.useState(false);

  // if(isLoading) {
  //   return <Text>Loading ....</Text>;
  // }

  // if(!session) {
  //   return <Redirect href={ROUTES.ONBOARDING_WELCOME} />;
  // }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        },
      }}
    />
  );
}
