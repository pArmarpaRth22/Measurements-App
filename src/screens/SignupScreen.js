import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Animated,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../context/AuthContext";

export default function SignupScreen({ navigation }) {
  const { signup, loading } = useContext(AuthContext);

  const [role, setRole] = useState("Owner");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // 🔔 Toast states
  const [toast, setToast] = useState("");
  const [toastType, setToastType] = useState("success"); // success | error
  const toastAnim = useState(new Animated.Value(100))[0];

  // 🔔 Toast function
  const showToast = (message, type = "success") => {
    setToast(message);
    setToastType(type);

    Animated.timing(toastAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      Animated.timing(toastAnim, {
        toValue: 100,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setToast(""));
    }, 2500);
  };

  const handleSignup = async () => {
    if (!name.trim())
      return showToast("Name is required", "error");

    if (!phone.trim() || phone.length < 10)
      return showToast("Enter valid phone number", "error");

    if (!email.includes("@"))
      return showToast("Enter valid email", "error");

    if (password.length < 4)
      return showToast("Password must be at least 4 characters", "error");

    if (password !== confirmPassword)
      return showToast("Passwords do not match", "error");

    try {
      await signup({ name, phone, email, password, role });

      showToast(
        "🎉 Account created successfully! Please login to continue.",
        "success"
      );

      setTimeout(() => {
        navigation.navigate("Login");
      }, 2000);
    } catch (err) {
      showToast("Signup failed. Try again.", "error");
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#F4F5F7" }}>
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          {/* TOP SPACE */}
          <View style={{ flex: 0.25 }} />

          {/* FORM CARD */}
          <View
            style={{
              flex: 0.75,
              backgroundColor: "#FFFFFF",
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
            }}
          >
            <ScrollView
              contentContainerStyle={{ padding: 24 }}
              keyboardShouldPersistTaps="handled"
            >
              <Text style={styles.title}>Create Account</Text>

              {/* ROLE TOGGLE */}
              <View style={styles.toggle}>
                {["Owner", "Customer"].map((item) => (
                  <TouchableOpacity
                    key={item}
                    onPress={() => setRole(item)}
                    style={[
                      styles.toggleBtn,
                      role === item && styles.toggleActive,
                    ]}
                  >
                    <Text
                      style={{
                        color: role === item ? "#fff" : "#374151",
                        fontWeight: "700",
                      }}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              <TextInput
                placeholder="Full Name"
                value={name}
                onChangeText={setName}
                style={styles.input}
              />

              <TextInput
                placeholder="Phone Number"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
                style={styles.input}
              />

              <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
                style={styles.input}
              />

              <TextInput
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                style={styles.input}
              />

              <TextInput
                placeholder="Confirm Password"
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                style={styles.input}
              />

              <TouchableOpacity
                style={styles.button}
                onPress={handleSignup}
                disabled={loading}
              >
                <Text style={styles.buttonText}>
                  {loading ? "Creating..." : `Sign up as ${role}`}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.link}>
                  Already have an account? Login
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </KeyboardAvoidingView>

        {/* 🔔 TOAST */}
        {toast !== "" && (
          <Animated.View
            style={{
              position: "absolute",
              bottom: 20,
              left: 20,
              right: 20,
              backgroundColor:
                toastType === "success" ? "#ECFDF5" : "#FEF2F2",
              borderLeftWidth: 5,
              borderLeftColor:
                toastType === "success" ? "#10B981" : "#EF4444",
              padding: 14,
              borderRadius: 12,
              transform: [{ translateY: toastAnim }],
            }}
          >
            <Text
              style={{
                color:
                  toastType === "success" ? "#065F46" : "#7F1D1D",
                textAlign: "center",
                fontWeight: "600",
              }}
            >
              {toast}
            </Text>
          </Animated.View>
        )}
      </SafeAreaView>
    </View>
  );
}

const styles = {
  title: {
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
  },
  toggle: {
    flexDirection: "row",
    backgroundColor: "#E5E7EB",
    borderRadius: 14,
    padding: 4,
    marginBottom: 20,
  },
  toggleBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: "center",
  },
  toggleActive: {
    backgroundColor: "#0F172A",
  },
  input: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#0F172A",
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },
  link: {
    textAlign: "center",
    marginTop: 20,
    color: "#0F172A",
    fontWeight: "700",
  },
};
