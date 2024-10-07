import React from "react";
import { Text, View } from "react-native";
import { useRouter } from "expo-router";
import { Header } from "@/components/header/Header";
import { IMAGES } from "@/assets/Images"; // Ensure this import path is correct
import { COLORS } from "@/constants/Colors";
import { SIZES, WEIGHTS } from "@/constants/Font"; // Ensure this import path is correct
import CommonAppLayout from "@/components/common/CommonAppLayout";
import CommonLink from "@/components/common/CommonLink";
import CommonButtonWithLinks from "@/components/common/CommonButtonWithLinks";
import WalletCard from "@/components/common/WalletCard";
import CompanyCard from "@/components/common/CompanyCard";
import { ROUTES } from "@/constants/Routes";
import { HeaderLeftIcon } from "@/components/header/HeaderLeftIcon";
import { ListItem, OrderedList } from "@/components/common/OrderedList";

export default function TermsAndConditions() {
  const router = useRouter();

  return (
    <CommonAppLayout
      style={{
        backgroundColor: COLORS.gray.lightGrayBackground,
      }}
      mainContentStyle={{
        backgroundColor: COLORS.gray.white,
      }}
      header={
        <Header
          leftComponent={<HeaderLeftIcon onPress={() => router.dismiss()} />}
        />
      }
      scrollable
    >
      <Text
        style={{
          fontSize: SIZES.SIZE_17,
          color: COLORS.loyalty.silver,
          width: "100%",
        }}
      >
        Terms and Conditions
      </Text>
      <View style={{ marginTop: 16, flex: 1, gap: 16 }}>
        <OrderedList>
          {[
            "Your personal information, including your name, surname, email address, cellphone number, location, credit card details, purchase history, vehicle details and date of birth, may be collected and stored by our mobile app for the purpose of providing you with a personalized experience and improving our services.",
            "We will not share your personal information with any third parties without your consent, except as required by law or as necessary to provide our services to you.",
            "We take the security of your personal information seriously and have implemented measures to protect your data from unauthorized access, disclosure, or use. However, no system can guarantee absolute security, and we cannot be held responsible for any unauthorized access to your personal information.",
            "We take the security of your personal information seriously and have implemented measures to protect your data from unauthorized access, disclosure, or use. However, no system can guarantee absolute security, and we cannot be held responsible for any unauthorized access to your personal information.",
            "We may update these terms and conditions from time to time, and any changes will be posted on our app. Your continued use of our app after any changes have been made indicates your acceptance of the updated terms and conditions.",
          ].map((text, index) => (
            <ListItem key={index}>
              <Text
                style={{ color: COLORS.gray.black, flex: 1, flexWrap: "wrap" }}
              >
                {text}
              </Text>
            </ListItem>
          ))}
        </OrderedList>
        <Text>
          Please read these terms and conditions carefully before using our
          mobile app.
        </Text>
        <Text>
          If you have any questions or concerns about our privacy practices,
          please contact us via email at info@uknomi.com or contact our customer
          care line on 000 000 0000.
        </Text>
      </View>
    </CommonAppLayout>
  );
}
