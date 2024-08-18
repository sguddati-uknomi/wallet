import React from "react";
import {
  Text,
  Image,
  View,
  StyleProp,
  TouchableOpacity,
  ImageSourcePropType,
  ViewStyle,
} from "react-native";
import { IMAGES } from "@/assets/Images"; // Ensure this import path is correct
import { COLORS } from "@/constants/Colors";
import CommonModal from "./CommonModal";
import CommonPageTitleSection from "./CommonPageTitleSection";
import CommonButtonWithLinks from "./CommonButtonWithLinks";
import CommonLink from "./CommonLink";
import { SIZES } from "@/constants/Font";

const CompanyCard = ({
  id,
  title,
  address,
  rating,
  distance,
  logo,
  reviews,
  onButtonIconPress,
  onCardAdd,
  cardStyle,
  showIconButton = true,
}: {
  id?: string;
  title?: string;
  address?: string;
  rating?: number;
  distance?: number;
  logo?: ImageSourcePropType;
  reviews?: number;
  onButtonIconPress?: () => void;
  onCardAdd?: (id: string) => void;
  cardStyle?: ViewStyle;
  showIconButton?: boolean;
}) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <View style={[styles.cardContainer, cardStyle]}>
      {/* Logo on the left */}
      <View style={styles.logoContainer}>
        <Image
          source={logo} // Replace with the actual logo URI
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Middle Information Section */}
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.address}>{address}</Text>
        <View style={styles.ratingContainer}>
          {/* Star Ratings */}
          {Array.from({ length: 5 }).map((_, index) => (
            <Image
              key={index}
              source={
                index < (rating ?? 0)
                  ? IMAGES.icons.filledStar
                  : IMAGES.icons.unfilledStar
              }
              style={styles.starIcon}
              resizeMode="contain"
            />
          ))}
          <Text style={styles.reviewCount}>({reviews} reviews)</Text>
        </View>
      </View>

      {/* Right Section */}
      {(showIconButton || distance) && (
        <View style={styles.rightSection}>
          {/* Button in the top right */}
          {!showIconButton && <View />}
          {showIconButton && (
            <TouchableOpacity
              style={styles.button}
              onPress={onButtonIconPress ?? (() => setModalVisible(true))}
            >
              <Image
                source={IMAGES.icons.lightPlus}
                style={{
                  width: 16,
                  height: 16,
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          )}

          {/* Distance in the bottom right */}
          {distance && <Text style={styles.distance}>{distance}km Away</Text>}
        </View>
      )}
      <CommonModal
        onClose={() => setModalVisible(false)}
        modalVisible={modalVisible}
      >
        <CommonPageTitleSection
          titleStyle={{
            fontSize: SIZES.SIZE_17,
          }}
          descriptionStyle={{
            fontSize: SIZES.SIZE_12,
          }}
          title={title ?? ""}
          description="Rewards Card"
        />
        <CommonButtonWithLinks
          style={{
            marginTop: 24,
          }}
          text="Add Card"
          onPress={() => {
            setModalVisible(false);
            if (onCardAdd) {
              onCardAdd(id ?? "");
            }
          }}
        >
          <CommonLink
            text="Not now, thanks"
            onPress={() => {
              setModalVisible(false);
            }}
          />
        </CommonButtonWithLinks>
      </CommonModal>
    </View>
  );
};

const styles = {
  cardContainer: {
    flexDirection: "row",
    borderRadius: 12,
    backgroundColor: "white",
    shadowColor: "#FFFFFF",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: "center",
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.gray.lightGray,
    paddingVertical: 8,
  },
  logoContainer: {
    width: 72,
    height: 68,
    borderRadius: 10,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: COLORS.gray.lightGray,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    marginLeft: 16,
    overflow: "hidden",
  },
  logo: {
    width: 70,
    height: 64,
  },
  infoContainer: {
    flex: 1,
    justifyContent: "center",
    marginVertical: 4,
  },
  name: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 4,
    color: COLORS.gray.black,
  },
  address: {
    fontSize: 12,
    color: COLORS.gray.black,
    lineHeight: 14,
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  starIcon: {
    width: 16,
    height: 16,
    marginRight: 2, // Space between stars
  },
  reviewCount: {
    fontSize: 12,
    color: "#AAA",
    marginLeft: 4,
  },
  rightSection: {
    alignItems: "flex-end",
    justifyContent: "space-between",
    height: "100%",
  },
  button: {
    width: 30,
    height: 30,
    borderRadius: 18,
    backgroundColor: "#00CC66",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    marginRight: 8,
  },
  buttonText: {
    fontSize: 20,
    lineHeight: 20,
  },
  distance: {
    fontSize: 12,
    color: COLORS.gray.black,
    backgroundColor: COLORS.gray.lightGrayBackground,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: 62,
    minHeight: 40,
    textAlign: "center",
    marginBottom: -8,
    alignItems: "flex-end",
  },
} as StyleProp<any>;

export default CompanyCard;
