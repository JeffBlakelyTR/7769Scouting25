import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false, // Default to no header, but override per screen
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute", // Transparent background for iOS blur effect
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: true, // Enable the header for this screen
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="pregame/index"
        options={{
          title: "Pregame",
          headerShown: true, // Enable the header for this screen
          tabBarIcon: ({ color }) => (
            <FontAwesome name="list" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="auton/index"
        options={{
          title: "Autonomous",
          headerShown: true, // Enable the header for this screen
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="robot" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="teleop/index"
        options={{
          title: "Teleop",
          headerShown: true, // Enable the header for this screen
          tabBarIcon: ({ color }) => (
            <Ionicons name="game-controller" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="endgame/index"
        options={{
          title: "Endgame",
          headerShown: true, // Enable the header for this screen
          tabBarIcon: ({ color }) => (
            <Ionicons name="flag" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
