import React from "react";
import { Redirect } from "expo-router";
import { ROUTES } from "@/constants/Routes";

export default function AppIndex() {
  return <Redirect href={ROUTES.ACCOUNT_PAYMENT_METHODS} />; // Redirect to the welcome or sign-in screen
}
