import React from "react";
import {
  Text,
  View,
  Image,
  Linking,
  ScrollView,
  StyleProp,
} from "react-native";
import { useRouter } from "expo-router";
import { Header } from "@/components/header/Header";
import { IMAGES } from "@/assets/Images"; // Ensure this import path is correct
import { COLORS } from "@/constants/Colors";
import { SIZES, WEIGHTS } from "@/constants/Font"; // Ensure this import path is correct
import CommonAppLayout from "@/components/common/CommonAppLayout";
import CommonInput from "@/components/common/CommonInput";
import NavigationMenuItem from "@/components/common/NavigationMenuItem";
import { ROUTES } from "@/constants/Routes";
import { HeaderLeftIcon } from "@/components/header/HeaderLeftIcon";
import CommonButtonWithLinks from "@/components/common/CommonButtonWithLinks";
import CommonLink from "@/components/common/CommonLink";
import CompanyCard from "@/components/common/CompanyCard";

export default function SearchCard() {
  const router = useRouter();
  const [search, setSearch] = React.useState("");

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
            <HeaderLeftIcon text="Wallet" onPress={() => router.dismiss()} />
          }
        />
      }
    >
      <View style={{ marginBottom: 24 }}>
        <CommonInput
          placeholder="Search for Reward Cards"
          value={search}
          onChangeText={setSearch}
          icon={IMAGES.icons.support}
          isMinimalistic
          inputBackgroundColor={COLORS.gray.white}
          inputTextColor={COLORS.gray.black}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{ gap: 12 }}>
        <CompanyCard
          title="Lexi's Drink Barn"
          address="216 Tokai Rd, Dreyersdal, Cape Town, 7945"
          reviews={1250}
          rating={3}
          logo={IMAGES.demos.dunkinDonuts}
          showIconButton={false}
          cardStyle={{ borderWidth: 0 }}
        >
          <StoreHours />
        </CompanyCard>
        <CompanyCard
          title="Lexi's Drink Barn"
          address="216 Tokai Rd, Dreyersdal, Cape Town, 7945"
          reviews={1250}
          rating={3}
          logo={IMAGES.demos.dunkinDonuts}
          showIconButton={false}
          cardStyle={{ borderWidth: 0 }}
        >
          <StoreHours />
        </CompanyCard>
        <CompanyCard
          title="Lexi's Drink Barn"
          address="216 Tokai Rd, Dreyersdal, Cape Town, 7945"
          reviews={1250}
          rating={3}
          logo={IMAGES.demos.dunkinDonuts}
          showIconButton={false}
          cardStyle={{ borderWidth: 0 }}
        >
          <StoreHours />
        </CompanyCard>
      </ScrollView>
    </CommonAppLayout>
  );
}

// Helper function to group hours by day
const groupByDay = (hours) => {
  return hours.reduce((acc, current) => {
    (acc[current.day] = acc[current.day] || []).push(current.time);
    return acc;
  }, {});
};

export function StoreHours() {
  const hours = [
    { day: "Saturday", time: "9am to 12pm" },
    { day: "Saturday", time: "1pm to 7pm" },
    { day: "Sunday", time: "9am to 12am" },
    // Add more days and times as needed
  ];

  const groupedHours = groupByDay(hours);

  return (
    <View style={styles.container}>
      <Text style={styles.hoursTitle}>Hours:</Text>
      <View style={styles.hoursList}>
        {Object.entries(groupedHours).map(([day, times], index) => (
          <View key={index} style={styles.hoursRow}>
            <Text style={styles.dayText}>{day}</Text>
            <View style={styles.timeContainer}>
              {times.map((time: string, timeIndex: number) => (
                <Text key={timeIndex} style={styles.timeText}>
                  {time}
                </Text>
              ))}
            </View>
          </View>
        ))}
        <CommonButtonWithLinks
          style={{ marginTop: 16, width: 180 }}
          text={"Call"}
          onPress={() => {}}
          buttonColor={COLORS.secondary.lightGreen}
        />
        <CommonButtonWithLinks
          style={{ marginTop: 16, width: 180 }}
          text={"Add Card"}
          onPress={() => {}}
        />
      </View>
    </View>
  );
}

const styles = {
  container: {
    maxWidth: 250,
    display: "flex",
    flexDirection: "row",
    gap: 12,
    padding: 16,
  },
  hoursTitle: {
    fontWeight: WEIGHTS.BOLD,
    fontSize: SIZES.SIZE_12,
    marginBottom: 8,
    flex: 1,
  },
  hoursList: {
    flex: 3,
  },
  hoursRow: {
    flexDirection: "row",
    marginBottom: 4,
  },
  dayText: {
    fontSize: SIZES.SIZE_12,
    flex: 1,
  },
  timeContainer: {
    flexDirection: "column", // Stack time slots vertically
    gap: 4,
  },
  timeText: {
    fontSize: SIZES.SIZE_12,
  },
} as StyleProp<any>;
