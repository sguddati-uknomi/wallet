import React from "react";
import { Redirect } from "expo-router";
import { ROUTES } from "@/constants/Routes";

export default function AppIndex() {
  return <Redirect href={ROUTES.WALLET} />; // Redirect to the welcome or sign-in screen
}
