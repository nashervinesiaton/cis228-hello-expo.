import React, { useState } from "react";
import {
  Alert,
  Button,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function HomeScreen() {
  const [userName, setUserName] = useState("");

  const handlePress = () => {
    if (userName.trim() === "") {
      Alert.alert("Input Required", "Please enter your name to continue.");
      return;
    }

    Alert.alert(
      "Access Granted",
      `Hello, ${userName}! Welcome to your new React Native application.`,
    );

    setUserName("");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.card}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
            }}
            style={styles.heroImage}
            resizeMode="cover"
          />

          <View style={styles.contentContainer}>
            <Text style={styles.greetingTitle}>Developer Portal</Text>
            <Text style={styles.subtitle}>
              Enter your credentials to initialize the system.
            </Text>

            <View style={styles.inputSection}>
              <Text style={styles.label}>Full Name</Text>

              <TextInput
                style={styles.input}
                placeholder="e.g., Nash"
                placeholderTextColor="#9ca3af"
                value={userName}
                onChangeText={setUserName}
                autoCorrect={false}
              />
            </View>

            <View style={styles.buttonWrapper}>
              <Button
                title="Initialize System"
                color={Platform.OS === "ios" ? "#007AFF" : "#2563eb"}
                onPress={handlePress}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  heroImage: {
    width: "100%",
    height: 180,
    backgroundColor: "#e5e7eb",
  },
  contentContainer: {
    padding: 24,
  },
  greetingTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#4b5563",
    marginBottom: 24,
    lineHeight: 20,
  },
  inputSection: {
    marginBottom: 24,
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 6,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  input: {
    backgroundColor: "#f9fafb",
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: "#111827",
  },
  buttonWrapper: {
    marginTop: 8,
    borderRadius: 8,
    overflow: "hidden",
  },
});
