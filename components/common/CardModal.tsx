import { IMAGES } from "@/assets/Images";
import { COLORS } from "@/constants/Colors";
import { SIZES, WEIGHTS } from "@/constants/Font";
import React from "react";
import { Modal, StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Image } from "expo-image";
import { PARAM, ROUTES } from "@/constants/Routes";
import NavigationMenuItem from "./NavigationMenuItem";
import { useRouter } from "expo-router";
import CustomSwitch from "./Switch";

const CardModal = ({
  cardInfo,
  children,
  onClose,
  modalVisible,
}: {
  cardInfo?: any;
  children?: React.ReactNode;
  modalVisible?: boolean;
  onClose: () => void;
}) => {
  const router = useRouter();

  const ACCOUNT_MENU_ITEMS = [
    {
      title: "Rewards History",
      icon: IMAGES.icons.lightHistory,
      route: ROUTES.WALLET_CARD_REWARDS_HISTORY.replace(
        PARAM.CARD_ID,
        cardInfo?.id
      ),
    },
    {
      title: "Rewards Summary",
      icon: IMAGES.icons.lightReward,
      route: ROUTES.WALLET_CARD_REWARDS_SUMMARY.replace(
        PARAM.CARD_ID,
        cardInfo?.id
      ),
    },
    {
      title: "Favorite Menu Items",
      icon: IMAGES.icons.lightHeart,
      route: ROUTES.WALLET_CARD_FAVORITE_MENU_ITEMS.replace(
        PARAM.CARD_ID,
        cardInfo?.id
      ),
    },
    {
      title: "Favorite Locations",
      icon: IMAGES.icons.lightLocation,
      route: ROUTES.WALLET_CARD_FAVORITE_LOCATIONS.replace(
        PARAM.CARD_ID,
        cardInfo?.id
      ),
    },
    {
      title: "Terms and Conditions",
      icon: IMAGES.icons.lightTAndC,
      route: ROUTES.WALLET_CARD_TERMS_AND_CONDITIONS.replace(
        PARAM.CARD_ID,
        cardInfo?.id
      ),
    },
    {
      title: "Remove Card",
      icon: IMAGES.icons.lightRemovePaymentMethod,
      route: ROUTES.WALLET_CARD_REMOVE_CARD.replace(
        PARAM.CARD_ID,
        cardInfo?.id
      ),
    },
  ];

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => onClose()}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottomWidth: 1,
              borderColor: COLORS.gray.lightGray,
              paddingHorizontal: 24,
              paddingBottom: 12,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Image
                style={{
                  width: 46,
                  height: 46,
                  alignSelf: "flex-end",
                  borderRadius: 23,
                  borderWidth: 1,
                  borderColor: COLORS.gray.lightGray,
                }}
                source={cardInfo?.brandLogo}
                contentFit="contain"
              />
              <Text
                style={{
                  maxWidth: 200,
                  fontSize: SIZES.SIZE_19,
                  fontWeight: WEIGHTS.BOLD,
                }}
              >
                {cardInfo?.brandTitle}
              </Text>
            </View>
            <TouchableOpacity
              style={{ padding: 4, alignSelf: "center" }}
              activeOpacity={1}
              onPress={onClose}
            >
              <Image
                style={{
                  width: 24,
                  height: 24,
                  alignSelf: "flex-end",
                }}
                source={IMAGES.icons.darkClose}
                contentFit="contain"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.modalContent}>
            <View
              style={{
                width: "100%",
                gap: 16,
                paddingBottom: 28,
                paddingTop: 16,
              }}
            >
              <View
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  paddingLeft: 16,
                }}
              >
                <Text
                  style={{
                    fontSize: SIZES.SIZE_17,
                    fontWeight: WEIGHTS.SEMI_BOLD,
                  }}
                >
                  Allow Notifications
                </Text>
                <CustomSwitch small value={false} onValueChange={() => {}} />
              </View>
              <View
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  paddingLeft: 16,
                }}
              >
                <Text
                  style={{
                    fontSize: SIZES.SIZE_17,
                    fontWeight: WEIGHTS.SEMI_BOLD,
                  }}
                >
                  Enable Auto Pay
                </Text>
                <CustomSwitch small value={false} onValueChange={() => {}} />
              </View>
              <View
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  paddingLeft: 16,
                }}
              >
                <Text
                  style={{
                    fontSize: SIZES.SIZE_17,
                    fontWeight: WEIGHTS.SEMI_BOLD,
                  }}
                >
                  Hide Card
                </Text>
                <CustomSwitch small value={false} onValueChange={() => {}} />
              </View>
            </View>
            {ACCOUNT_MENU_ITEMS.map((item) => {
              return (
                <NavigationMenuItem
                  key={item.title}
                  title={item.title}
                  icon={item.icon}
                  iconSize={20}
                  onPress={() => {
                    onClose();
                    router.push(item.route);
                  }}
                />
              );
            })}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    paddingVertical: 12,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalContent: {
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    paddingBottom: 48,
  },
});

export default CardModal;
