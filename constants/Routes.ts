export const PARAM = {
  CARD_ID: "${CARD_ID}",
  MENU_ITEM_ID: "${MENU_ITEM_ID}",
  FAVORITE_LOCATION_ID: "${FAVORITE_LOCATION_ID}",
  CAR_ID: "${CARD_ID}",
};

// TODO: Check if its possible to combine the routes

export const ROUTES = {
  WALLET: "/wallet",
  WALLET_SEARCH_CARD: "/wallet/search-card",
  WALLET_CARD: `/wallet/card/${PARAM.CARD_ID}`,
  WALLET_CARDS: `/wallet/cards`,
  WALLET_CARD_PICKS_FOR_YOU: `/wallet/card/${PARAM.CARD_ID}/spicks-for-you`,
  WALLET_CARD_ORDER_HISTORY: `/wallet/card/${PARAM.CARD_ID}/order-history`,
  WALLET_CARD_REWARDS_SUMMARY: `/wallet/card/${PARAM.CARD_ID}/rewards-summary`,
  WALLET_CARD_FAVORITE_MENU_ITEMS: `/wallet/card/${PARAM.CARD_ID}/favorite-menu-items`,
  WALLET_CARD_ADD_FAVORITE_MENU_ITEMS: `/wallet/card/${PARAM.CARD_ID}/add-favorite-menu-items`,
  WALLET_CARD_FAVORITE_MENU_ITEM_DETAILS: `/wallet/card/${PARAM.CARD_ID}/favorite-menu-item-details/${PARAM.MENU_ITEM_ID}`,
  WALLET_CARD_FAVORITE_LOCATIONS: `/wallet/card/${PARAM.CARD_ID}/favorite-locations`,
  WALLET_CARD_ADD_FAVORITE_LOCATION: `/wallet/card/${PARAM.CARD_ID}/add-favorite-location`,
  WALLET_CARD_FAVORITE_LOCATION_DETAILS: `/wallet/card/${PARAM.CARD_ID}/favorite-location-details/${PARAM.FAVORITE_LOCATION_ID}`,
  WALLET_CARD_TERMS_AND_CONDITIONS: `/wallet/card/${PARAM.CARD_ID}/terms-and-conditions`,
  WALLET_CARD_REMOVE_CARD: `/wallet/card/${PARAM.CARD_ID}/remove`,

  // Account
  ACCOUNT: "/account",
  ACCOUNT_PROFULE: "/account/profile",
  ACCOUNT_REGISTERED_CARS: "/account/registered-cars",
  ACCOUNT_REGISTER_A_CAR: "/account/register-a-car",
  ACCOUNT_REGISTERED_CAR_DETAILS: `/account/registered-cars/${PARAM.CAR_ID}`,
  ACCOUNT_PAYMENT_METHODS: "/account/payment-methods",
  ACCOUNT_PAYMENT_METHODS_ADD_CARD: "/account/payment-methods/add-card",
  ACCOUNT_FAVORITE_MENU_ITEMS: "/account/favorite-menu-items",
  ACCOUNT_FAVORITE_SELECTED_RESTAURANTS: "/account/favorite-restaurants",
  ACCOUNT_FAVORITE_LOCATIONS: "/account/favorite-locations",
  ACCOUNT_TERMS_AND_CONDITIONS: "/account/terms-and-conditions",
  ACCOUNT_SUPPORT: "/account/support",
  ACCOUNT_SUPPORT_FAQ: "/account/support/faq",
  ACCOUNT_SUPPORT_UKNOMI: "/account/support/uknomi",
  ACCOUNT_SUPPORT_UKNOMI_PAY: "/account/support/uknomi-pay",
  ACCOUNT_SUPPORT_PRIVACY: "/account/support/privacy",
  ACCOUNT_SETTINGS: "/account/settings",
  ACCOUNT_DELETE: "/account/delete",

  // Notificaitons
  NOTIFICATIONS: "/notifications",

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
  AUTH_ENABLE_NOTIFICATIONS: "/allow-notifications",
};
