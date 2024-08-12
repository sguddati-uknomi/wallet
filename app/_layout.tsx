import { Stack } from "expo-router";
import { ROUTES } from "@/constants/Routes";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name={ROUTES.ONBOARDING_WELCOME.substring(1)} />
      <Stack.Screen name={ROUTES.ONBOARDING_PAIN.substring(1)} />
      <Stack.Screen name={ROUTES.ONBOARDING_VALUE_PROP.substring(1)} />
    </Stack>
  );
}
