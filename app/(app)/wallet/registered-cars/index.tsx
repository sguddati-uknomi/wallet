import React, { useContext } from "react";
import {
  Text,
  View,
  ImageSourcePropType,
  TouchableOpacity,
  ScrollView,
  StyleProp,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Header } from "@/components/header/Header";
import { IMAGES } from "@/assets/Images"; // Ensure this import path is correct
import { COLORS } from "@/constants/Colors";
import { SIZES, WEIGHTS } from "@/constants/Font"; // Ensure this import path is correct
import CommonAppLayout from "@/components/common/CommonAppLayout";
import CommonLink from "@/components/common/CommonLink";
import CommonButtonWithLinks from "@/components/common/CommonButtonWithLinks";
import { PARAM, ROUTES } from "@/constants/Routes";
import { HeaderLeftIcon } from "@/components/header/HeaderLeftIcon";
import CommonPageTitleSection from "@/components/common/CommonPageTitleSection";
import { Image, ImageSource } from "expo-image";
import { UserAppStateContext } from "@/contexts/MockAppState";
// Mock data with both local and remote images
const MOCK_REGISTERED_CARS = [
  {
    id: "123123",
    licensePlate: "BL0166",
    make: "Land Rover",
    model: "Range Rover Evoque",
    color: "Silver",
    imageSource: IMAGES.icons.lightEmptyCar, // Local image
  },
  {
    id: "12413",
    licensePlate: "BL0177",
    make: "Land Rover",
    model: "Range Rover Evoque",
    color: "Silver",
    imageSource: IMAGES.icons.lightEmptyCar, // Local image
  },
  {
    id: "123123",
    licensePlate: "BL0188",
    make: "Land Rover",
    model: "Range Rover Evoque",
    color: "Silver",
    imageSource:
      "https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Remote image
  },
];

export default function RegisteredCars() {
  const router = useRouter();
  const { mockAppState } = useContext(UserAppStateContext);

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
    >
      <Text
        style={{
          fontSize: SIZES.SIZE_17,
          color: COLORS.loyalty.silver,
          width: "100%",
          fontWeight: WEIGHTS.SEMI_BOLD,
        }}
      >
        Registered Cars
      </Text>
      <ScrollView
        style={{ marginTop: 24, marginBottom: 12 }}
        showsVerticalScrollIndicator={false}
      >
        {/* <NoRegisteredCars /> */}
        <View>
          {mockAppState?.registeredCars.map((car, idx) => (
            <PaymentMethod
              key={idx}
              licensePlate={car.licensePlate}
              make={car.make}
              model={car.model}
              color={car.color}
              imageSource={car.imageSource}
              onPress={() =>
                router.push(
                  ROUTES.REGISTERED_CARS_EDIT_CAR.replace(PARAM.CAR_ID, car.id)
                )
              }
            />
          ))}
        </View>
      </ScrollView>
      <CommonButtonWithLinks
        text="Add Car"
        onPress={() => {
          router.push(ROUTES.REGISTERED_CARS_REGISTER_CAR);
        }}
      >
        <CommonLink text="Not now, thanks" onPress={() => {}} />
      </CommonButtonWithLinks>
    </CommonAppLayout>
  );
}

function NoRegisteredCars() {
  return (
    <View
      style={{
        backgroundColor: COLORS.gray.white,
        borderColor: COLORS.gray.lightGray,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 64,
      }}
    >
      <Image
        source={IMAGES.registerCars}
        style={{ width: 212, height: 128, marginBottom: 12 }}
        contentFit="contain"
      />
      <CommonPageTitleSection
        titleStyle={{
          width: 240,
          fontSize: SIZES.SIZE_22,
          fontWeight: WEIGHTS.BOLD,
          marginTop: 16,
        }}
        descriptionStyle={{
          width: 270,
          fontSize: SIZES.SIZE_17,
          fontWeight: WEIGHTS.REGULAR,
          textAlign: "center",
          marginTop: 8,
        }}
        title={"No Registered Cars"}
        description="Help your favorite restaurants recognize you when you arrive"
      />
    </View>
  );
}

const PaymentMethod = ({
  onPress,
  imageSource,
  licensePlate,
  make,
  model,
  color,
}: {
  onPress?: () => void;
  imageSource?: ImageSource | string | number | ImageSource[] | string[] | null; // Accept both local and remote images
  licensePlate?: string;
  make?: string;
  model?: string;
  color?: string;
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.row}>
        <Image style={styles.image} source={imageSource} contentFit="cover" />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{licensePlate}</Text>
          <Text style={styles.subtitle}>{make}</Text>
          <Text style={styles.subtitle}>{model}</Text>
          <Text style={styles.subtitle}>{color}</Text>
        </View>
      </View>
      <Image
        style={styles.icon}
        source={IMAGES.icons.rightArrow}
        contentFit="contain"
      />
    </TouchableOpacity>
  );
};

const styles = {
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    shadowColor: "#FFFFFF",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: "center",
    flex: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.gray.lightGray,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 6,
  },
  row: {
    flexDirection: "row",
  },
  image: {
    width: 68,
    height: 64,
    alignSelf: "center",
  },
  textContainer: {
    marginLeft: 12,
    width: 200,
  },
  title: {
    fontSize: SIZES.SIZE_14,
    fontWeight: WEIGHTS.BOLD,
    wordBreak: "wrap",
  },
  subtitle: {
    fontSize: SIZES.SIZE_14,
    color: COLORS.gray.black,
  },
  icon: {
    width: 12,
    height: 12,
  },
} as StyleProp<any>;
