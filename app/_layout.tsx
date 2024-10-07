import { Slot } from "expo-router";
import React, { useEffect } from "react";
import { UserRegistrationProvider } from "@/contexts/UserLogin";
import { UserAppStateProvider } from "@/contexts/MockAppState";
import * as Notifications from "expo-notifications";
import { router } from "expo-router";
import { ROUTES } from "@/constants/Routes";

function useNotificationObserver() {
  useEffect(() => {
    let isMounted = true;

    function redirect(notification: Notifications.Notification) {
      const url = notification.request.content.data?.url;
      if (url) {
        router.dismissAll();
        router.replace(ROUTES.WALLET);
        router.push(url);
      }
    }

    Notifications.getLastNotificationResponseAsync().then((response) => {
      if (!isMounted || !response?.notification) {
        return;
      }
      redirect(response?.notification);
    });

    const subscription = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        redirect(response.notification);
      }
    );

    return () => {
      isMounted = false;
      subscription.remove();
    };
  }, []);
}

export default function RootLayout() {
  useNotificationObserver();

  return (
    <UserRegistrationProvider>
      <UserAppStateProvider>
        <Slot />
      </UserAppStateProvider>
    </UserRegistrationProvider>
  );
}
