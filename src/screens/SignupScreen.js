// src/screens/SignupScreen.js
import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../context/AuthContext";

export default function SignupScreen({ navigation }) {
  const { signup } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={{ flex: 1, backgroundColor: "#F4F5F7" }}>
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          {/* Top Spacer */}
          <View style={{ flex: 0.3 }} />

          {/* Card */}
          <View
            style={{
              flex: 0.7,
              backgroundColor: "#FFFFFF",
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
            }}
          >
            <ScrollView
              contentContainerStyle={{ padding: 24 }}
              keyboardShouldPersistTaps="handled"
            >
              {/* Title */}
              <Text
                style={{
                  fontSize: 26,
                  fontWeight: "700",
                  color: "#1F2937",
                  textAlign: "center",
                  marginBottom: 6,
                }}
              >
                Create Account
              </Text>

              <Text
                style={{
                  fontSize: 14,
                  color: "#6B7280",
                  textAlign: "center",
                  marginBottom: 24,
                }}
              >
                Start managing your tailor shop digitally
              </Text>

              {/* Email */}
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "600",
                  color: "#374151",
                  marginBottom: 6,
                }}
              >
                Email Address
              </Text>
              <TextInput
                placeholder="Enter your email"
                placeholderTextColor="#9CA3AF"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                style={{
                  backgroundColor: "#F9FAFB",
                  borderWidth: 1,
                  borderColor: "#E5E7EB",
                  borderRadius: 12,
                  paddingHorizontal: 14,
                  paddingVertical: 14,
                  fontSize: 16,
                  marginBottom: 16,
                  color: "#1F2937",
                }}
              />

              {/* Password */}
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "600",
                  color: "#374151",
                  marginBottom: 6,
                }}
              >
                Password
              </Text>
              <TextInput
                placeholder="Create a password"
                placeholderTextColor="#9CA3AF"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                style={{
                  backgroundColor: "#F9FAFB",
                  borderWidth: 1,
                  borderColor: "#E5E7EB",
                  borderRadius: 12,
                  paddingHorizontal: 14,
                  paddingVertical: 14,
                  fontSize: 16,
                  marginBottom: 24,
                  color: "#1F2937",
                }}
              />

              {/* Signup Button */}
              <TouchableOpacity
                onPress={() => signup(email, password)}
                style={{
                  backgroundColor: "#0F172A",
                  paddingVertical: 16,
                  borderRadius: 14,
                  alignItems: "center",
                  marginBottom: 20,
                }}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 18,
                    fontWeight: "700",
                  }}
                >
                  Create Account
                </Text>
              </TouchableOpacity>

              {/* Login Link */}
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Text
                  style={{
                    color: "#6B7280",
                    fontWeight: "600",
                  }}
                >
                  Already have an account?
                </Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Text
                    style={{
                      marginLeft: 4,
                      color: "#0F172A",
                      fontWeight: "700",
                    }}
                  >
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}


