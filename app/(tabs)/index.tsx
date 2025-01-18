import { Image, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { Button } from "react-native-paper";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function HomeScreen() {
  const router = useRouter();

  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [selectedScouter, setSelectedScouter] = useState<string | null>(null);

  const events = [
    { label: "Reefscape Regional", value: "event1" },
    { label: "Crescendo Championship", value: "event2" },
  ];
  const scouters = [
    { label: "Alice", value: "scouter1" },
    { label: "Bob", value: "scouter2" },
  ];

  const handleStart = () => {
    if (!selectedEvent || !selectedScouter) {
      alert("Please select an event and a scouter to proceed.");
      return;
    }
    router.push("/pregame");
  };

  const handleAdmin = () => {
    router.push("./admin");
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/react-logo.png")}
          style={styles.appLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to FRC 2025 Scouting App</ThemedText>
      </ThemedView>

      <ThemedView style={styles.pickerContainer}>
        <ThemedText type="subtitle">Select Event</ThemedText>
        <RNPickerSelect
          onValueChange={(value) => setSelectedEvent(value)}
          items={events}
          placeholder={{
            label: "Select an Event",
            value: null,
            color: "#9EA0A4",
          }}
          style={pickerSelectStyles}
          value={selectedEvent}
        />
      </ThemedView>

      <ThemedView style={styles.pickerContainer}>
        <ThemedText type="subtitle">Select Scouter</ThemedText>
        <RNPickerSelect
          onValueChange={(value) => setSelectedScouter(value)}
          items={scouters}
          placeholder={{
            label: "Select a Scouter",
            value: null,
            color: "#9EA0A4",
          }}
          style={pickerSelectStyles}
          value={selectedScouter}
        />
      </ThemedView>

      <ThemedView style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={handleStart}
          disabled={!selectedEvent || !selectedScouter}
          contentStyle={styles.startButtonContent}
          labelStyle={styles.startButtonLabel}
        >
          Start Scouting
        </Button>
        <Button
          mode="text"
          onPress={handleAdmin}
          labelStyle={styles.adminButtonLabel}
        >
          Admin Panel
        </Button>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    marginBottom: 16,
    alignItems: "center",
  },
  pickerContainer: {
    marginBottom: 16,
  },
  buttonContainer: {
    marginTop: 16,
    alignItems: "center",
  },
  appLogo: {
    height: 150,
    width: 150,
    alignSelf: "center",
    marginVertical: 16,
  },
  startButtonContent: {
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  startButtonLabel: {
    fontSize: 16,
  },
  adminButtonLabel: {
    fontSize: 16,
    color: "#0056A6",
  },
});

const pickerSelectStyles = {
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30, // Avoid overlapping with dropdown icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30,
  },
};
