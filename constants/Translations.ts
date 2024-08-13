// translations.ts

type TranslationData = {
  [key: string]: string;
};

const TRANSLATIONS: { [languageCode: string]: TranslationData } = {
  en: {
    acc_menu_car: "Register Cars",
    acc_menu_delete: "Delete Account",
    acc_menu_items: "Favorite Menu Items",
    acc_menu_locations: "Favorite Locations",
    acc_menu_payment: "Payment Methods",
    acc_menu_profile: "Profile",
    acc_menu_settings: "Settings",
    acc_menu_support: "Support",
    acc_menu_tc: "Terms and Conditions",
    add: "Add",
    addpayment_page_add: "Add Your Card",
    addpayment_page_cardname: "Name On Card",
    addpayment_page_cardnum: "Card Number",
    addpayment_page_expire: "Expiry Date",
    btn_Next: "Next",
    btn_SkipAndStart: "Skip and get started",
    contact_us_1: "Couldn’t find what you’re looking for? Please contact us at",
    contact_us_2: "support@uKnomi.com",
    contact_us_3: "or",
    contact_us_4: "000 000 0000",
    create_password_page_1: "Create Password",
    create_password_page_2: "Secure your account with a strong password",
    create_password_page_3: "Enter Password",
    create_password_page_4: "Retype Password",
    create_password_page_5: "Contains at least 8 characters",
    create_password_page_6: "Contains an upper case letter",
    create_password_page_7: "Contains a lower case letter",
    create_password_page_8: "Contains a special character",
    create_password_page_9: "Contains a number",
    delete_account_page_1: "Did You Know?",
    delete_account_page_2:
      "You can deactivate your account instead of deleting it",
    delete_account_page_3:
      "By deactivating your account you will stop earning rewards. Your profile and history will not be visible until you sign in again.",
    delete_account_page_4:
      "By deleting your account you will stop earning rewards and your profile history will be gone forever.",
    email: "Email",
    email_or_mobile_1: "Introduce Yourself",
    email_or_mobile_2:
      "A great journey starts with a single step. Let’s get to know you better.",
    email_or_mobile_3: "Email or Mobile Number",
    email_or_mobile_4: "Already registered?",
    email_or_mobile_5: "Sign in",
    email_or_mobile_6: "Continue without Signing Up",
    enable_bluetooth_page_1: "Enable Bluetooth",
    enable_bluetooth_page_2:
      "To give you a personalized experience, we use Bluetooth to triangulate your location",
    enable_location_1: "Enable Location",
    enable_location_2:
      "Enable your location to let your restaurant know you're here",
    enable_notifications_page_1: "Allow Notifications",
    enable_notifications_page_2:
      "Allow push notifications to receive timely updates on orders and payments",
    enable_notifications_page_3: "Enable",
    enable_notifications_page_4: "Not now, thanks",
    faq_page_1: "Frequently Asked Questions",
    faq_page_10:
      "When you place your order and have sufficient rewards to pay for your purchase in full, simply ask the operator to use your rewards to settle the amount due.",
    faq_page_11: "Where can I check the current value of my reward points?",
    faq_page_12:
      "At present, you can ask our team at the window to check your reward balance.",
    faq_page_13: "Do my reward points expire?",
    faq_page_14:
      "Yes, rewards expire after 3 months from the date they were issued. If you unregister from the Lexi’s rewards program, your rewards are also forfeited.",
    faq_page_15: "How can I earn reward points?",
    faq_page_16: "No info given",
    faq_page_17: "How can I unregister from the uKnomi rewards program?",
    faq_page_18:
      "At present, you can send an email to xxx and request to be unregistered.",
    faq_page_2: "How can I earn reward points?",
    faq_page_3: "There are three easy ways for you to earn reward points:",
    faq_page_4: "As soon as you register, you'll receive 25 points.",
    faq_page_5: "On your birthday, you'll automatically earn 25 points.",
    faq_page_6:
      "Every time you make a purchase, you'll earn 1 point for every $1 spent.",
    faq_page_7: "How much are my reward points worth?",
    faq_page_8: "10 reward points are worth $1.",
    faq_page_9: "How can I use my reward points to pay for a purchase?",
    onboarding_Pain: "You are more than just a number",
    onboarding_Pain_detail:
      "uKnomi helps your favorite restaurants get to know you, not just your order number",
    onboarding_Value: "Get your order with a side a delight",
    onboarding_Value_detail:
      "uKnomi gives you money back every time you make a purchase",
    onboarding_Welcome: "Welcome to uKnomi",
    onboarding_Welcome_detail:
      "Say hello to easy ordering, personalized choices and cash-back rewards",
    payment_page_cards_lable: "Your Credit Cards",
    payment_page_hypertext: "Set Auto-Pay Limit",
    payment_page_other: "Other Payment Options",
    payment_page_text:
      "Enjoy a seamless dining experience with our easy auto-pay option",
    paymetn_page_apple: "Add Apple Pay",
    paymetn_page_paypal: "Add PayPal",
    paypal_enterpass: "Enter Password",
    remove: "Remove",
    save: "Save",
    settings_page_1: "Enable Face ID",
    settings_page_2: "Enable Bluetooth",
    settings_page_3: "Enable Location",
    settings_page_4: "Allow Notifications",
    settings_page_5: "Enable Auto-pay",
    settings_page_6: "Enable Face ID Sign In",
    support_page_1: "Have questions?",
    support_page_2: "What are you looking for?",
    support_page_3: "FAQ",
    support_page_4: "How uKnomi works",
    support_page_5: "How uKnomi Pay works",
    support_page_6: "Privacy policy",
    support_text_page_1: "How uKnomi Works",
    support_text_page_10:
      "When you visit a participating restaurant, proceed to place your order as usual. Let the cashier know that you'll be using uKnomi Pay and authorize the transaction using the app. Select the desired credit card from your stored options, and the payment will be processed securely and quickly. You can have peace of mind knowing that your payment is being handled efficiently, all while earning rewards for your loyalty!",
    support_text_page_2:
      "There are so many ways to benefit from your uKnomi Wallet! You can pay your order with ease using uKnomi Pay, get personalized choices based on your favorite menu items and past orders, earn cash-back reward points as well as exclusive membership-tier benefits!",
    support_text_page_3:
      "Each restaurant has their own point value. To confirm your card’s point value, visit your card’s Rewards Summary page.",
    support_text_page_4:
      "When placing an order at your card’s restaurant, inform the operator that you want to use your rewards for payment. If you have enough points to cover the full amount, they will be deducted from your total. Alternatively, opt in for our easy auto-pay option with uKnomi Pay.",
    support_text_page_5:
      "Points expire after three months from the issuance date, so be sure to check your balance and membership-tier on your card’s Rewards Summary page. As an added bonus, restaurants may reward you with special offers and discounts based on your membership-tier which is determined based on your order frequency. For more information, visit your card’s Rewards Summary page.",
    support_text_page_6:
      "If you unregister from the uKnomi rewards program, your accumulated rewards will be forfeited. Consider deactivating your account or, if no longer needed, hide your a card(s) instead.",
    support_text_page_7: "How uKnomi Pay Works",
    support_text_page_8:
      "To make your restaurant payments even more convenient, uKmomi Pay offers an Auto-pay option that allows you to use your pre-loaded credit card at any of your favourite restaurants.",
    support_text_page_9:
      "Once you've added your credit card, enable the auto-pay option in Payment Methods page. This feature ensures that your pre-loaded credit card is ready to be used for seamless transactions at the drive-through or counter.",
    termsconditions_page_1: "Terms and Conditions",
    termsconditions_page_10: "or contact our customer care line on ",
    termsconditions_page_11: "000 000 0000.",
    termsconditions_page_2:
      "Your personal information, including your name, email, phone number, location, credit card details, purchase history, vehicle details and date of birth, may be collected and stored by our mobile app for the purpose of providing you with a personalized experience and improving our services.",
    termsconditions_page_3:
      "We will not share your personal information with any third parties without your explicit consent, except as required by law or necessary to provide the services you request. You may review and update your personal information by accessing your account settings within the app.",
    termsconditions_page_4:
      "You have the right to request deletion of your personal data, subject to legal and contractual obligations. To exercise this right, please contact us via email or phone.",
    termsconditions_page_5:
      "Our mobile app may use cookies and other tracking technologies to enhance your experience. You can control your cookie preferences through your device settings.",
    termsconditions_page_6:
      "We reserve the right to modify these terms and conditions at any time. Any changes will be communicated to you through the app or via email.",
    termsconditions_page_7:
      "For any questions or concerns regarding these terms and conditions, please contact our support team.",
    termsconditions_page_8:
      "By using our mobile app, you agree to abide by these terms and conditions and our privacy policy.",
    termsconditions_page_9:
      "If you do not agree with these terms, please discontinue use of the app and contact us for assistance.",
  },
};
