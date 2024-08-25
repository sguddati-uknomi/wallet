import { IMAGES } from "@/assets/Images";
import { COLORS } from "@/constants/Colors";
import { SIZES, WEIGHTS } from "@/constants/Font";
import { View, StyleProp, Text, Image } from "react-native";

const OrderSummary = ({
  title,
  date,
  time,
  orderId,
  items,
  total,
  points,
  value,
  children,
}: {
  title: string;
  date?: string;
  time?: string;
  orderId?: string;
  items: {
    description: string;
    total: number;
  }[];
  total: number;
  points: number;
  value: number;
  children?: React.ReactNode;
}) => {
  const formattedTotal = total.toFixed(2);
  const formattedValue = value.toFixed(2);

  const info = [];

  if (date) info.push(date);
  if (time) info.push(time);
  info.push(`Order ID: ${orderId}`);

  return (
    <View style={styles.container}>
      {/* Order Header */}
      <View>
        <Text style={styles.title}>{title}</Text>
        {info.length > 0 && (
          <Text style={styles.subtitle}>{info.join(" | ")}</Text>
        )}
      </View>

      {/* Order Items */}
      <View style={styles.itemsContainer}>
        {items.map((item, index) => (
          <View key={index} style={styles.itemRow}>
            <Text style={styles.itemDescription}>{item.description}</Text>
            <Text style={styles.itemTotal}>${item.total.toFixed(2)}</Text>
          </View>
        ))}
      </View>

      {/* Order Summary */}
      <View style={styles.summaryRow}>
        <Text style={styles.itemsText}>{items.length} items</Text>
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryText}>Total: ${formattedTotal}</Text>
          <View style={styles.summaryDetail}>
            <Text style={styles.summaryText}>Points: {points}</Text>
            <Image source={IMAGES.icons.filledStar} style={styles.icon} />
          </View>
          <View style={styles.summaryDetail}>
            <Text style={styles.summaryText}>Value: ${formattedValue}</Text>
            <Image source={IMAGES.icons.coupon} style={styles.icon} />
          </View>
        </View>
      </View>

      {/* Action Buttons */}
      {children && <View>{children}</View>}
    </View>
  );
};

const styles = {
  container: {
    minHeight: 258,
    backgroundColor: COLORS.gray.white,
    borderWidth: 1,
    borderColor: COLORS.gray.lightGray,
    borderRadius: 4,
    paddingVertical: 24,
    paddingHorizontal: 20,
    gap: 24,
  },
  title: {
    width: 240,
    fontSize: SIZES.SIZE_12,
    fontWeight: WEIGHTS.SEMI_BOLD,
  },
  subtitle: {
    fontSize: SIZES.SIZE_12,
    fontWeight: WEIGHTS.REGULAR,
    marginTop: 4,
  },
  itemsContainer: {
    gap: 8,
  },
  itemRow: {
    flexDirection: "row",
    columnGap: 40,
  },
  itemDescription: {
    flex: 4,
    fontSize: SIZES.SIZE_12,
    fontWeight: WEIGHTS.REGULAR,
  },
  itemTotal: {
    flex: 1,
    alignSelf: "flex-end",
    textAlign: "right",
    fontSize: SIZES.SIZE_12,
    fontWeight: WEIGHTS.SEMI_BOLD,
  },
  summaryRow: {
    flexDirection: "row",
  },
  itemsText: {
    flex: 1,
    fontSize: SIZES.SIZE_12,
    fontWeight: WEIGHTS.REGULAR,
    color: COLORS.gray.midGray,
  },
  summaryContainer: {
    flex: 1,
    alignSelf: "flex-end",
    gap: 4,
  },
  summaryText: {
    fontSize: SIZES.SIZE_12,
    fontWeight: WEIGHTS.SEMI_BOLD,
    textAlign: "right",
  },
  summaryDetail: {
    flexDirection: "row",
    alignSelf: "flex-end",
    alignItems: "center",
    gap: 4,
  },
  icon: {
    width: 16,
    height: 16,
    alignSelf: "center",
  },
} as StyleProp<any>;

export default OrderSummary;
