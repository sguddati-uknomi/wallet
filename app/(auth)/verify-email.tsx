import { SafeAreaView, Text } from "react-native";
import { Link } from "expo-router";
import { Button, View } from "react-native";
import { Stack, useRouter } from "expo-router";

export default function Pain() {
  return (
    <SafeAreaView>
      <Text>Pain</Text>
      <Link href={"/(onboarding)/signin"} asChild>
        <Button title="Open the home page" />
      </Link>
    </SafeAreaView>
  );
}
