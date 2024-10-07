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
import { Collapsible } from "@/components/common/Collapsible";
import { HeaderLeftIcon } from "@/components/header/HeaderLeftIcon";
import { ListItem, OrderedList } from "@/components/common/OrderedList";

export default function SupportFAQ() {
  const router = useRouter();

  return (
    <CommonAppLayout
      style={{
        backgroundColor: COLORS.gray.lightGrayBackground,
      }}
      mainContentStyle={{
        backgroundColor: COLORS.gray.white,
        paddingHorizontal: 0,
      }}
      header={
        <Header
          leftComponent={<HeaderLeftIcon onPress={() => router.dismiss()} />}
        />
      }
      scrollable
    >
      <View style={{ paddingHorizontal: 24, alignItems: "center" }}>
        <Text
          style={{
            fontSize: SIZES.SIZE_17,
            color: COLORS.loyalty.silver,
            width: "100%",
            fontWeight: WEIGHTS.SEMI_BOLD,
          }}
        >
          Frequently Asked Questions
        </Text>
      </View>
      <View style={{ marginTop: 16, flex: 1 }}>
        <Collapsible
          title="How can I earn reward points?"
          titleStyle={{
            fontSize: SIZES.SIZE_14,
            fontWeight: WEIGHTS.BOLD,
          }}
          collapsibleContainerStyle={{
            borderTopWidth: 1,
            paddingLeft: 48,
            paddingRight: 32,
            borderColor: COLORS.gray.lightGray,
          }}
        >
          <Text>There are three easy ways for you to earn reward points:</Text>
          <OrderedList listStyle={{ marginTop: 12, gap: 4 }}>
            {[
              "As soon as you register, you'll receive 25 points.",
              "On your birthday, you'll automatically earn 25 points.",
              "Every time you make a purchase, you'll earn 1 point for every $1 spent.",
            ].map((text, index) => (
              <ListItem key={index}>
                <Text
                  style={{
                    color: COLORS.gray.black,
                    flex: 1,
                    flexWrap: "wrap",
                  }}
                >
                  {text}
                </Text>
              </ListItem>
            ))}
          </OrderedList>
        </Collapsible>
        <Collapsible
          title="How much are my reward points worth?"
          titleStyle={{
            fontSize: SIZES.SIZE_14,
            fontWeight: WEIGHTS.BOLD,
          }}
          collapsibleContainerStyle={{
            borderTopWidth: 1,
            paddingLeft: 48,
            paddingRight: 32,
            borderColor: COLORS.gray.lightGray,
          }}
        />
        <Collapsible
          title="How can I use my reward points to pay for a purchase?"
          titleStyle={{
            fontSize: SIZES.SIZE_14,
            fontWeight: WEIGHTS.BOLD,
          }}
          collapsibleContainerStyle={{
            borderTopWidth: 1,
            paddingLeft: 48,
            paddingRight: 32,
            borderColor: COLORS.gray.lightGray,
          }}
        />
        <Collapsible
          title="Where can I check the current value of my reward points?"
          titleStyle={{
            fontSize: SIZES.SIZE_14,
            fontWeight: WEIGHTS.BOLD,
          }}
          collapsibleContainerStyle={{
            borderTopWidth: 1,
            paddingLeft: 48,
            paddingRight: 32,
            borderColor: COLORS.gray.lightGray,
          }}
        />
        <Collapsible
          title="Do my reward points expire?"
          titleStyle={{
            fontSize: SIZES.SIZE_14,
            fontWeight: WEIGHTS.BOLD,
          }}
          collapsibleContainerStyle={{
            borderTopWidth: 1,
            paddingLeft: 48,
            paddingRight: 32,
            borderColor: COLORS.gray.lightGray,
          }}
        />
        <Collapsible
          title="How can I unregister from the uKnomi rewards porogram?"
          titleStyle={{
            fontSize: SIZES.SIZE_14,
            fontWeight: WEIGHTS.BOLD,
          }}
          collapsibleContainerStyle={{
            borderTopWidth: 1,
            borderBottomWidth: 1,
            paddingLeft: 48,
            paddingRight: 32,
            borderColor: COLORS.gray.lightGray,
          }}
        />
      </View>
      <View
        style={{ paddingHorizontal: 24, marginTop: 48, alignItems: "center" }}
      >
        <Text
          style={{
            fontSize: SIZES.SIZE_14,
            color: COLORS.gray.black,
            width: 280,
            textAlign: "center",
          }}
        >
          Couldn’t find what you’re looking for?{"\n"}
          Please contact us at{"\n"}
          support@uKnomi.com or 000 000 0000
        </Text>
      </View>
    </CommonAppLayout>
  );
}
