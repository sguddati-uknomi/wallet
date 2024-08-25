import React from "react";
import { View, Text } from "react-native";
import { useRouter } from "expo-router";
import { Header } from "@/components/header/Header";
import { IMAGES } from "@/assets/Images"; // Ensure this import path is correct
import { SIZES, WEIGHTS } from "@/constants/Font"; // Ensure this import path is correct
import CommonAppLayout from "@/components/common/CommonAppLayout";
import { HeaderLeftIcon } from "@/components/header/HeaderLeftIcon";
import PageTitleSection from "@/components/common/CommonPageTitleSection";
import { COLORS } from "@/constants/Colors";
import RegisterCarForm from "@/components/common/RegisterCarForm";

export default function RegisterCar() {
  const router = useRouter();
  const [formValues, setFormValues] = React.useState({
    licensePlate: "",
    make: "",
    model: "",
    color: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormValues({
      ...formValues,
      [field]: value,
    });
  };

  const handleSave = (values: any) => {
    // Save the form values
    console.log("Car details saved:", values);
  };

  const handleRemove = () => {
    // Handle remove action
    console.log("Car details removed");
  };

  React.useEffect(() => {
    // Simulating an API call to fetch initial values
    const fetchInitialValues = async () => {
      try {
        // Replace with actual API call
        // const response = await fetch('https://api.example.com/car-details');
        const data = {
          licensePlate: "BL0188",
          make: "Land Rover",
          model: "Range Rover Evoque",
          color: "Silver",
        };
        setFormValues({
          licensePlate: data.licensePlate,
          make: data.make,
          model: data.model,
          color: data.color,
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
              text="Registered Cars"
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
        <Text
          style={{
            fontSize: SIZES.SIZE_17,
            color: COLORS.loyalty.silver,
            width: "100%",
            fontWeight: WEIGHTS.SEMI_BOLD,
            marginBottom: 8,
          }}
        >
          Registered Car
        </Text>
        <RegisterCarForm
          formValues={formValues}
          onInputChange={handleInputChange}
          onPrimaryButton={handleSave}
          onSecondaryButton={handleRemove}
          isAddingNewCar={false}
        />
      </View>
    </CommonAppLayout>
  );
}
