export const PARAM = {
  CARD_ID: "${CARD_ID}",
  MENU_ITEM_ID: "${MENU_ITEM_ID}",
  FAVORITE_LOCATION_ID: "${FAVORITE_LOCATION_ID}",
  CAR_ID: "${CARD_ID}",
  PAYMENT_METHOD_ID: "${PAYMENT_METHOD_ID}",
};

// TODO: Check if its possible to combine the routes

export const ROUTES = {
  WALLET: "/wallet",
  WALLET_SEARCH_CARD: "/wallet/search-card",
  WALLET_CARDS: `/wallet/cards`,
  WALLET_CARD: `/wallet/cards/${PARAM.CARD_ID}`,
  WALLET_CARD_PICKS_FOR_YOU: `/wallet/cards/${PARAM.CARD_ID}/picks-for-you`,
  WALLET_CARD_ORDER_HISTORY: `/wallet/cards/${PARAM.CARD_ID}/order-history`,
  WALLET_CARD_REWARDS_HISTORY: `/wallet/cards/${PARAM.CARD_ID}/rewards-history`,
  WALLET_CARD_REWARDS_SUMMARY: `/wallet/cards/${PARAM.CARD_ID}/rewards-summary`,
  WALLET_CARD_FAVORITE_MENU_ITEMS: `/wallet/cards/${PARAM.CARD_ID}/favorite-menu-items`,
  WALLET_CARD_ADD_FAVORITE_MENU_ITEMS: `/wallet/cards/${PARAM.CARD_ID}/add-favorite-menu-items`,
  WALLET_CARD_FAVORITE_MENU_ITEM_DETAILS: `/wallet/cards/${PARAM.CARD_ID}/favorite-menu-item-details/${PARAM.MENU_ITEM_ID}`,
  WALLET_CARD_FAVORITE_LOCATIONS: `/wallet/cards/${PARAM.CARD_ID}/favorite-locations`,
  WALLET_CARD_ADD_FAVORITE_LOCATION: `/wallet/cards/${PARAM.CARD_ID}/add-favorite-location`,
  WALLET_CARD_FAVORITE_LOCATION_DETAILS: `/wallet/cards/${PARAM.CARD_ID}/favorite-location-details/${PARAM.FAVORITE_LOCATION_ID}`,
  WALLET_CARD_TERMS_AND_CONDITIONS: `/wallet/cards/${PARAM.CARD_ID}/terms-and-conditions`,
  WALLET_CARD_REMOVE_CARD: `/wallet/cards/${PARAM.CARD_ID}/remove`,

  // Account
  ACCOUNT: "/wallet/account",
  ACCOUNT_PROFILE: "/wallet/account/profile",
  REGISTERED_CARS: "/wallet/registered-cars",
  REGISTERED_CARS_REGISTER_CAR: "/wallet/registered-cars/register",
  REGISTERED_CARS_EDIT_CAR: `/wallet/registered-cars/${PARAM.CAR_ID}`,
  ACCOUNT_PAYMENT_METHODS: "/wallet/payment-methods",
  ACCOUNT_PAYMENT_METHODS_ADD_CARD: "/wallet/payment-methods/add",
  ACCOUNT_PAYMENT_METHODS_EDIT_CARD: `/wallet/payment-methods/${PARAM.PAYMENT_METHOD_ID}`,
  ACCOUNT_FAVORITE_MENU_ITEMS: "/wallet/account/favorite-menu-items",
  ACCOUNT_FAVORITE_SELECTED_RESTAURANTS: "/wallet/account/favorite-restaurants",
  ACCOUNT_FAVORITE_LOCATIONS: "/wallet/account/favorite-locations",
  TERMS_AND_CONDITIONS: "/wallet/terms-and-conditions",
  SUPPORT: "/wallet/support",
  SUPPORT_FAQ: "/wallet/support/faq",
  SUPPORT_UKNOMI: "/wallet/support/uknomi",
  SUPPORT_UKNOMI_PAY: "/wallet/support/uknomi-pay",
  SUPPORT_PRIVACY: "/wallet/support/privacy",
  ACCOUNT_SETTINGS: "/wallet/account/settings",
  ACCOUNT_DELETE: "/wallet/account/delete",

  // Notificaitons
  WALLET_NOTIFICATIONS: "/wallet/notifications",

  // Onboarding
  ONBOARDING_WELCOME: "/onboarding/welcome",
  ONBOARDING_PAIN: "/onboarding/pain",
  ONBOARDING_VALUE_PROP: "/onboarding/value-prop",

  // Auth - Sign in
  AUTH_SIGN_IN: "/sign-in",
  AUTH_FORGOT_PASSWORD: "/forgot-password",

  // Auth - Sign up
  AUTH_SIGN_UP: "/email",
  AUTH_SIGN_UP_VERIFY_EMAIL: "/verify-email",
  AUTH_CREATE_PASSWORD: "/create-password",
  AUTH_ENABLE_LOCATION: "/enable-location",
  AUTH_ENABLE_BLUETOOTH: "/enable-bluetooth",
  AUTH_ENABLE_NOTIFICATIONS: "/enable-notifications",
};
