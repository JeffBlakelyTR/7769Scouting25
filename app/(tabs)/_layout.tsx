import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
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
          // Ionicons has "home", "home-outline", etc.
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="pregame/index"
        options={{
          title: "Pregame",
          // Ionicons uses "settings", "settings-outline" instead of "gear"
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="auton/index"
        options={{
          title: "Autonomous",
          // Ionicons doesn't have "robot", so let's use "logo-android"
          tabBarIcon: ({ color }) => (
            <Ionicons name="logo-android" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="teleop/index"
        options={{
          title: "Teleop",
          // Ionicons has "game-controller", "game-controller-outline"
          tabBarIcon: ({ color }) => (
            <Ionicons name="game-controller" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="endgame/index"
        options={{
          title: "Endgame",
          // Ionicons doesn't have "flag.checkered", so let's just use "flag"
          tabBarIcon: ({ color }) => (
            <Ionicons name="flag" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
