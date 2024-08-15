import React from "react";
import { Text, Image, View } from "react-native";
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
import PageTitleSection from "@/components/common/CommonPageTitleSection";
import CommonModal from "@/components/common/CommonModal";
import CommonPageTitleSection from "@/components/common/CommonPageTitleSection";

const CARD_MOCK_DATA = [
  {
    id: 1,
    brandTitle: "Eegee's",
    cardHolderName: "Jane Doe",
    cardExpirationDate: "16 January 2023",
    cardNumber: "J12345678910",
    backgroundColor: COLORS.semantic.blue, // Example color
    brandLogo: IMAGES.demos.eegees, // Placeholder image URL
    show: true, // Adjust as needed
  },
  {
    id: 2,
    brandTitle: "Lexi's Drink Bar",
    cardHolderName: "Jane Doe",
    cardExpirationDate: "16 January 2023",
    cardNumber: "J12345678910",
    backgroundColor: COLORS.semantic.red, // Example color
    brandLogo: IMAGES.demos.lexis, // Placeholder image URL
    show: false, // Adjust as needed
  },
];

const MOCK_COMPANY_DATA = [
  {
    id: 1,
    brandName: "Pizza Hut",
    address: "216 Tokai Rd, Dreyersdal, Cape Town, 7945",
    rating: 3,
    reviewCount: 1250,
    distance: 15,
    logo: IMAGES.demos.pizzaHut, // Replace with the actual image reference
  },
  {
    id: 2,
    brandName: "Dunkin' Donuts",
    address: "123 Main St, Springfield, USA",
    rating: 4,
    reviewCount: 980,
    distance: 10,
    logo: IMAGES.demos.dunkinDonuts, // Replace with the actual image reference
  },
  {
    id: 3,
    brandName: "Taco Bell",
    address: "456 Elm St, Gotham, USA",
    rating: 5,
    reviewCount: 1500,
    distance: 5,
    logo: IMAGES.demos.tacoBell, // Replace with the actual image reference
  },
];

export default function DeleteAccount() {
  const router = useRouter();
  const [modalVisible, setModalVisible] = React.useState(false);

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
          rightComponent={
            <Image
              style={{
                alignSelf: "flex-end",
                justifyContent: "center",
                height: 16,
                width: 16,
                resizeMode: "contain",
              }}
              source={IMAGES.icons.darkProfile}
            />
          }
        />
      }
    >
      <View
        style={{
          flex: 1,
          gap: 24,
          paddingTop: 80,
          alignItems: "center",
        }}
      >
        <PageTitleSection
          title={"Did you know?"}
          description={"You can deactivate your account instead of deleting it"}
          titleStyle={{ fontSize: SIZES.SIZE_22 }}
          descriptionStyle={{ fontSize: SIZES.SIZE_17 }}
        />
        <View style={{ gap: 12, alignItems: "center" }}>
          <Text style={{ textAlign: "center", width: 280 }}>
            By deactivating your account you will stop earning rewards. Your
            profile and history will not be visible until you sign in again.
          </Text>
          <Text style={{ textAlign: "center", width: 280 }}>
            By deleting your account you will stop earning rewards and your
            profile history will be gone forever.
          </Text>
        </View>
        <CommonButtonWithLinks
          style={{
            marginTop: 24,
          }}
          text="Deactivate Account"
          onPress={() => {
            setModalVisible(false);
            router.dismissAll();
            router.replace(ROUTES.AUTH_SIGN_IN);
          }}
        >
          <CommonLink
            text="Delete Account"
            style={{ color: COLORS.secondary.burntRed }}
            onPress={() => {
              setModalVisible(true);
            }}
          />
        </CommonButtonWithLinks>
      </View>
      <CommonModal
        onClose={() => setModalVisible(false)}
        modalVisible={modalVisible}
      >
        <CommonPageTitleSection
          titleStyle={{
            display: "none",
          }}
          descriptionStyle={{
            fontSize: SIZES.SIZE_17,
          }}
          title={""}
          description="You’re about to delete your account."
        />
        <CommonButtonWithLinks
          style={{
            marginTop: 24,
          }}
          buttonColor={COLORS.darkMode.redError}
          text="Delete"
          onPress={() => {
            setModalVisible(false);
            router.dismissAll();
            router.replace(ROUTES.AUTH_SIGN_IN);
          }}
        />
      </CommonModal>
    </CommonAppLayout>
  );
}
