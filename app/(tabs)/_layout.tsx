import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
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
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="pregame/index"
        options={{
          title: "Pregame",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="gear" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="auton/index"
        options={{
          title: "Autonomous",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="play.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="teleop/index"
        options={{
          title: "Teleop",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="gamecontroller.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="endgame/index"
        options={{
          title: "Endgame",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="flag.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
