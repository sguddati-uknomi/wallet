import { IMAGES } from "@/assets/Images";
import { COLORS } from "@/constants/Colors";
import { SIZES } from "@/constants/Font";
import {
  ImageSourcePropType,
  StyleProp,
  TouchableOpacity,
  View,
  Text,
  Image,
} from "react-native";

const WalletCard = ({
  showButtonIcon = true,
  backgroundColor = COLORS.semantic.blue,
  brandLogo,
  brandTitle,
  cardHolderName,
  cardExpirationDate,
  cardNumber,
  buttonIcon = IMAGES.icons.darkPlus,
  onButtonIconPress,
  onCardPress,
  logoOnly,
}: {
  showButtonIcon?: boolean;
  backgroundColor?: string;
  brandLogo?: ImageSourcePropType;
  brandTitle?: string;
  cardHolderName?: string;
  cardExpirationDate?: string;
  cardNumber?: string;
  buttonIcon?: ImageSourcePropType;
  onButtonIconPress?: () => void;
  onCardPress?: () => void;
  logoOnly?: boolean;
}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[styles.container, { backgroundColor }]}
      onPress={onCardPress}
    >
      {showButtonIcon && (
        <TouchableOpacity
          activeOpacity={1}
          style={styles.roundImageContainer}
          onPress={onButtonIconPress}
        >
          <View style={styles.roundImageWrapper}>
            <Image
              source={buttonIcon}
              style={styles.roundImage}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
      )}
      {!logoOnly && (
        <View
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.title}>{brandTitle}</Text>
          <View>
            <Text style={styles.holderName}>{cardHolderName}</Text>
            <Text style={styles.date}>{cardExpirationDate}</Text>
            <Text style={styles.code}>{cardNumber}</Text>
          </View>
        </View>
      )}
      <Image
        source={brandLogo} // Dummy icon URL
        style={!logoOnly ? styles.iconRight : styles.iconLeft}
      />
    </TouchableOpacity>
  );
};

const styles = {
  container: {
    position: "relative",
    width: "100%",
    height: "100%",
    borderRadius: 18,
    backgroundColor: COLORS.semantic.blue,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  roundImageContainer: {
    position: "absolute",
    top: -20,
    right: 24,
    width: 42,
    height: 42,
    borderRadius: 24,
    backgroundColor: "white",
  },
  roundImageWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  roundImage: {
    width: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  holderName: {
    fontSize: SIZES.SIZE_12,
    color: "#FFFFFF",
  },
  date: {
    fontSize: SIZES.SIZE_12,
    color: "#FFFFFF",
    marginTop: 4,
  },
  code: {
    fontSize: SIZES.SIZE_12,
    color: "#FFFFFF",
    marginTop: 4,
  },
  iconRight: {
    position: "absolute",
    bottom: 12,
    right: 20,
    maxWidth: 80,
    maxHeight: 60,
    resizeMode: "contain",
  },
  iconLeft: {
    position: "absolute",
    bottom: 12,
    left: 20,
    maxWidth: 80,
    maxHeight: 60,
    resizeMode: "contain",
  },
} as StyleProp<any>;

export default WalletCard;
