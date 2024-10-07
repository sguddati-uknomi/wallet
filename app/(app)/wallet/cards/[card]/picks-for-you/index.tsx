import CommonAppLayout from "@/components/common/CommonAppLayout";
import { HeaderLeftIcon } from "@/components/header/HeaderLeftIcon";
import { COLORS } from "@/constants/Colors";
import { useRouter } from "expo-router";
import { Header } from "@/components/header/Header";
import { SIZES, WEIGHTS } from "@/constants/Font";
import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import { Image, ImageProps } from "expo-image";
import { IMAGES } from "@/assets/Images";
import WalletCard from "@/components/common/WalletCard";
import { PARAM, ROUTES } from "@/constants/Routes";
import CommonLink from "@/components/common/CommonLink";
import OrderSummary from "@/components/common/OrderSummary";

const menuItems = [
  {
    id: 1,
    imageSource:
      "https://images.unsplash.com/photo-1723744895444-e94a0e1dd378?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Chicken Stack Burger",
    price: 6.5,
  },
  {
    id: 2,
    imageSource:
      "https://images.unsplash.com/photo-1723744895444-e94a0e1dd378?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Veggie Wrap",
    price: 5.0,
  },
  {
    id: 3,
    imageSource:
      "https://images.unsplash.com/photo-1723744895444-e94a0e1dd378?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Cheese Pizza",
    price: 8.0,
  },
  {
    id: 4,
    imageSource:
      "https://images.unsplash.com/photo-1723744895444-e94a0e1dd378?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Spaghetti Bolognese",
    price: 7.75,
  },
  {
    id: 5,
    imageSource: "https://noexits",
    title: "Fish and Chips",
    price: 9.0,
  },
];

export default function PicksForYou() {
  const router = useRouter();

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
          fontSize: SIZES.SIZE_14,
          color: COLORS.loyalty.silver,
          fontWeight: WEIGHTS.SEMI_BOLD,
        }}
      >
        Picks for You
      </Text>

      <ScrollView
        style={{ marginTop: 24, marginBottom: 12 }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            gap: 10,
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {menuItems.map((item) => (
            <MenuItem
              key={item.id}
              imageSource={item?.imageSource}
              title={item.title}
              price={item.price}
            />
          ))}
        </View>
      </ScrollView>
    </CommonAppLayout>
  );
}

function MenuItem({
  imageSource,
  title,
  price,
  onPress,
}: {
  imageSource?: any;
  title: string;
  price: number;
  onPress?: () => {};
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 108,
        minHeight: 186,
        backgroundColor: COLORS.gray.white,
        borderWidth: 1,
        borderRadius: 18,
        borderColor: COLORS.gray.lightGray,
      }}
    >
      {/* image */}
      <View style={{ position: "relative" }}>
        <Image
          style={{
            width: "100%",
            height: 104,
            borderRadius: 18,
            overflow: "hidden",
          }}
          source={imageSource}
          placeholder={IMAGES.noFoodImage}
          contentFit="cover"
        />
        <View
          style={{
            width: 30,
            height: 30,
            backgroundColor: COLORS.primary.uKnomiLogoGreen,
            borderRadius: 24,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            right: 8,
            top: 8,
            zIndex: 2,
          }}
        >
          <Image
            source={IMAGES.icons.go} // You can replace this with a prop if needed
            style={{ width: 24, height: 12 }}
            contentFit="contain"
          />
        </View>
      </View>

      {/* item description */}
      <View style={{ padding: 8, gap: 16, flex: 1 }}>
        <Text style={{ textAlign: "center", flex: 1 }}>{title}</Text>
        <Text style={{ textAlign: "center" }}>${price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
}
