import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../context/AuthContext";

export default function WelcomeScreen() {
  const { user, logout } = useContext(AuthContext);

  return (
    <View style={{ flex: 1, backgroundColor: "#F4F5F7" }}>
      <SafeAreaView style={{ flex: 1, padding: 20 }}>
        {/* Header */}
        <Text
          style={{
            fontSize: 26,
            fontWeight: "700",
            color: "#1F2937",
            marginBottom: 6,
          }}
        >
          Welcome 👋
        </Text>

        <Text
          style={{
            fontSize: 14,
            color: "#6B7280",
            marginBottom: 30,
          }}
        >
          Manage your tailor shop with ease
        </Text>

        {/* Profile Card */}
        <View
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: 16,
            padding: 24,
            marginBottom: 30,
            alignItems: "center",
          }}
        >
          {/* Avatar */}
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              backgroundColor: "#0F172A",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 14,
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 28,
                fontWeight: "700",
              }}
            >
              {user?.email?.charAt(0).toUpperCase() || "U"}
            </Text>
          </View>

          {/* Name */}
          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
              color: "#1F2937",
              marginBottom: 4,
            }}
          >
            {user?.name || "Tailor Owner"}
          </Text>

          {/* Email */}
          <Text
            style={{
              fontSize: 14,
              color: "#6B7280",
            }}
          >
            {user?.email || "tailor@example.com"}
          </Text>
        </View>

        {/* Logout Button */}
        <TouchableOpacity
          onPress={logout}
          style={{
            backgroundColor: "#0F172A",
            paddingVertical: 16,
            borderRadius: 14,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 18,
              fontWeight: "700",
            }}
          >
            Logout
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}
