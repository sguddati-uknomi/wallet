import { IMAGES } from "@/assets/Images";
import { COLORS } from "@/constants/Colors";
import { createContext, useState } from "react";

export const UserAppStateContext = createContext<any>(null);

export function UserAppStateProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  const [mockAppState, setMockAppState] = useState({
    uKnomiBalance: "20.00",

    // Mock registered cars information
    registeredCars: [
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
    ],

    mockRewardCards: [
      {
        id: "1",
        brandTitle: "Salad And Go",
        cardHolderName: "Srinivas Guddati",
        cardExpirationDate: "16 January 2025",
        cardNumber: "J12345678910",
        backgroundColor: "#6E1645", // Example color
        brandLogo: IMAGES.demos.saladngo, // Placeholder image URL
        show: true, // Adjust as needed
        availableBalance: 150,
        picksForYou: [
          {
            id: 6,
            imageSource:
              "https://images.unsplash.com/photo-1723744895444-e94a0e1dd378?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Chicken Stack Burger",
            price: 6.5,
          },
          {
            id: 7,
            imageSource:
              "https://images.unsplash.com/photo-1723744895444-e94a0e1dd378?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Veggie Wrap",
            price: 5.0,
          },
          {
            id: 8,
            imageSource:
              "https://images.unsplash.com/photo-1723744895444-e94a0e1dd378?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Cheese Pizza",
            price: 8.0,
          },
          {
            id: 9,
            imageSource:
              "https://images.unsplash.com/photo-1723744895444-e94a0e1dd378?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Spaghetti Bolognese",
            price: 7.75,
          },
          {
            id: 10,
            imageSource: "https://noexits",
            title: "Fish and Chips",
            price: 9.0,
          },
        ],
        orderHistory: [
          {
            id: 1,
            title: "Salad And Go (1404)",
            date: "February 17, 2023",
            time: "01:45 PM",
            orderId: "0348",
            items: [
              {
                description: "Caesar Salad with Grilled Chicken",
                total: 10.5,
              },
              {
                description: "Buffalo Chicken Wrap",
                total: 9.0,
              },
              {
                description: "Cucumber Mint Lemonade",
                total: 3.5,
              },
              {
                description: "Protein Box",
                total: 7.0,
              },
            ],
            total: 30.0,
            points: 150,
            value: 5,
          },
          {
            id: 2,
            title: "Salad And Go (1405)",
            date: "September 02, 2024",
            time: "12:30 PM",
            orderId: "0349",
            items: [
              {
                description: "Fajita Salad with Grilled Chicken",
                total: 10.5,
              },
              {
                description: "BBQ Ranch Wrap with Turkey",
                total: 9.0,
              },
              {
                description: "Small Fries",
                total: 2.5,
              },
              {
                description: "Blueberry Basil Lemonade",
                total: 3.5,
              },
            ],
            total: 25.5,
            points: 120,
            value: 5,
          },
          {
            id: 3,
            title: "Salad And Go (1406)",
            date: "September 02, 2024",
            time: "01:00 PM",
            orderId: "0350",
            items: [
              {
                description: "Cobb Salad with Avocado",
                total: 11.0,
              },
              {
                description: "Mediterranean Wrap with Hummus",
                total: 8.5,
              },
              {
                description: "Kids' Salad",
                total: 4.0,
              },
              {
                description: "Traditional Lemonade",
                total: 2.5,
              },
            ],
            total: 26.0,
            points: 130,
            value: 5,
          },
        ],
        rewardsHistory: [
          {
            id: 1,
            date: "2023-08-29",
            pointsEarned: 100,
            description: "Purchased coffee",
          },
          {
            id: 2,
            date: "2023-08-28",
            pointsEarned: 50,
            description: "Gas station visit",
          },
        ],
      },
    ],

    mockCompanyRewardsCards: [
      {
        id: 1,
        brandName: "Pizza Hut",
        address: "216 Tokai Rd, Dreyersdal, Cape Town, 7945",
        rating: 3,
        reviewCount: 1250,
        distance: 15,
        logo: IMAGES.demos.pizzaHut, // Replace with the actual image reference
      },
      {
        id: 2,
        brandName: "Dunkin' Donuts",
        address: "123 Main St, Springfield, USA",
        rating: 4,
        reviewCount: 980,
        distance: 10,
        logo: IMAGES.demos.dunkinDonuts, // Replace with the actual image reference
      },
      {
        id: 3,
        brandName: "Taco Bell",
        address: "456 Elm St, Gotham, USA",
        rating: 5,
        reviewCount: 1500,
        distance: 5,
        logo: IMAGES.demos.tacoBell, // Replace with the actual image reference
      },
    ],

    mockPaymentMethods: [
      {
        id: "1",
        type: "card",
        cardNumber: "1234 5678 9012 3456",
        expiryDate: "12/24",
        cvc: "123",
        nameOnCard: "John Doe",
      },
      {
        id: "1",
        type: "bank",
        routingNumber: "1234567890123456",
        accountNumber: "987654321",
        accountHolderName: "John Doe",
      },
    ],

    mockNotifications: [
      {
        title: "Recommendation: Salad N Go",
        subtitle: "Want to order from Salad N Go?",
        secondsAgo: "15",
      },
      {
        title: "Approve Auto-Payment",
        subtitle: "Order ID: #0348",
        secondsAgo: "25",
        total: 54,
      },
      {
        title: "Approve Auto-Payment",
        subtitle: "Order ID: #0348",
        secondsAgo: "25",
        total: 24,
      },
      {
        title: "Approve Auto-Payment",
        subtitle: "Order ID: #0348",
        secondsAgo: "May 12, 2024",
        total: 50,
      },
    ],

    mockOrders: [
      {
        id: 1,
        title: "Salad And Go (1404)",
        date: "February 17, 2023",
        time: "01:45 PM",
        orderId: "0348",
        items: [
          {
            description: "Smoothie Combo with Small Fries and a Chicken Burger",
            total: 27.5,
          },
          {
            description: "Small Fries",
            total: 2.5,
          },
        ],
        total: 30.0,
        points: 150,
        value: 5,
      },
      {
        id: 2,
        title: "Salad And Go (1405)",
        date: "September 02, 2024",
        time: "12:30 PM",
        orderId: "0349",
        items: [
          {
            description: "Fajita Salad with Grilled Chicken",
            total: 10.5,
          },
          {
            description: "BBQ Ranch Wrap with Turkey",
            total: 9.0,
          },
          {
            description: "Small Fries",
            total: 2.5,
          },
          {
            description: "Blueberry Basil Lemonade",
            total: 3.5,
          },
        ],
        total: 25.5,
        points: 120,
        value: 5,
      },
      {
        id: 3,
        title: "Salad And Go (1406)",
        date: "September 02, 2024",
        time: "01:00 PM",
        orderId: "0350",
        items: [
          {
            description: "Cobb Salad with Avocado",
            total: 11.0,
          },
          {
            description: "Mediterranean Wrap with Hummus",
            total: 8.5,
          },
          {
            description: "Kids' Salad",
            total: 4.0,
          },
          {
            description: "Traditional Lemonade",
            total: 2.5,
          },
        ],
        total: 26.0,
        points: 130,
        value: 5,
      },
    ],

    mockOrderRecommendation: {
      usual: {
        id: 1,
        title: "Salad And Go (1404)",
        date: "February 17, 2023",
        time: "01:45 PM",
        orderId: "0352",
        items: [
          {
            description: "Caesar Salad with Grilled Chicken",
            total: 10.5,
          },
          {
            description: "Buffalo Chicken Wrap",
            total: 9.0,
          },
          {
            description: "Cucumber Mint Lemonade",
            total: 3.5,
          },
          {
            description: "Protein Box",
            total: 7.0,
          },
        ],
        total: 30.0,
        points: 150,
        value: 5,
        card: "1",
      },
      alternative: {
        id: 3,
        title: "Salad And Go (1406)",
        date: "September 02, 2024",
        time: "01:00 PM",
        orderId: "0353",
        items: [
          {
            description: "Cobb Salad with Avocado",
            total: 11.0,
          },
          {
            description: "Mediterranean Wrap with Hummus",
            total: 8.5,
          },
          {
            description: "Kids' Salad",
            total: 4.0,
          },
          {
            description: "Traditional Lemonade",
            total: 2.5,
          },
        ],
        total: 26.0,
        points: 130,
        value: 5,
        card: "1",
      },
    },
  });

  return (
    <UserAppStateContext.Provider value={{ mockAppState, setMockAppState }}>
      {children}
    </UserAppStateContext.Provider>
  );
}
