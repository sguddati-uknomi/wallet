import React from "react";
import { Image, View, StyleProp, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Header } from "@/components/header/Header";
import { Logo } from "@/components/header/Logo";
import { IMAGES } from "@/assets/Images"; // Ensure this import path is correct
import { SIZES, WEIGHTS } from "@/constants/Font"; // Ensure this import path is correct
import CommonAppLayout from "@/components/common/CommonAppLayout";
import CommonLink from "@/components/common/CommonLink";
import CommonButtonWithLinks from "@/components/common/CommonButtonWithLinks";
import { HeaderLeftIcon } from "@/components/header/HeaderLeftIcon";
import { ROUTES } from "@/constants/Routes";
import PageTitleSection from "@/components/common/CommonPageTitleSection";
import { COLORS } from "@/constants/Colors";
import CustomInput from "@/components/common/CommonInput";
import PaymentMethodForm from "@/components/common/PaymentMethodForm";

export default function PaymentMethodAdd() {
  const router = useRouter();
  const [formValues, setFormValues] = React.useState({
    cardNumber: "",
    expiryDate: "",
    cvc: "",
    nameOnCard: "",
  });

  const handleInputChange = (field: any, value: any) => {
    setFormValues({
      ...formValues,
      [field]: value,
    });
  };

  const handleSave = (values: any) => {
    // Save the form values
    console.log("Form saved:", values);
  };

  const handleRemove = () => {
    // Handle remove action
    console.log("Form removed");
  };
  React.useEffect(() => {
    // Simulating an API call to fetch initial values
    const fetchInitialValues = async () => {
      try {
        // Replace with actual API call
        // const response = await fetch('https://api.example.com/card-details');
        const data = {
          cardNumber: "12313 123123 123123 123123",
          expiryDate: "12/12",
        };
        setFormValues({
          cardNumber: data.cardNumber,
          expiryDate: data.expiryDate,
          cvc: "",
          nameOnCard: "",
        });
      } catch (error) {
        console.error("Error fetching initial values:", error);
      }
    };

    fetchInitialValues();
  }, []);

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
          leftComponent={
            <HeaderLeftIcon
              text="Payment Methods"
              onPress={() => router.dismiss()}
            />
          }
        />
      }
      scrollable
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <PageTitleSection
            title="Add Your Card"
            titleStyle={{
              fontSize: SIZES.SIZE_32,
            }}
          />
        </View>
        <PaymentMethodForm
          formValues={formValues}
          onInputChange={handleInputChange}
          onSave={handleSave}
          onRemove={handleRemove}
        />
      </View>
    </CommonAppLayout>
  );
}
