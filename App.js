import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { TradesScreen } from "./src/features/trades/screens/trades.screen";
import { TradesInputScreen } from "./src/features/trades/screens/trade-input.screen";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";

import { SafeArea } from "./src/components/utility/safe-area.component";

const Tab = createBottomTabNavigator();

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);
const Users = () => (
  <SafeArea>
    <Text>Traders/Investors</Text>
  </SafeArea>
);

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
            tabBarStyle: [
              {
                display: "flex",
              },
              null,
            ],
          }}
        >
          <Tab.Screen
            name="Add Trade"
            component={TradesInputScreen}
            options={{
              tabBarLabel: "Add Trade",
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="plus" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Trades"
            component={TradesScreen}
            options={{
              tabBarLabel: "Trades",
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="suitcase" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Traders/Investors"
            component={Users}
            options={{
              tabBarLabel: "Traders/Investors",
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="users" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={Settings}
            options={{
              tabBarLabel: "Settings",
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="gear" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
      <ExpoStatusBar style="auto" />
    </>
  );
}
