import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import i18n from "../i18n";
import LanguageToggle from "../components/LanguageToggle";
import { useState } from "react";

export default function HomeScreen({ navigation }) {
  const [, forceUpdate] = useState(0);
  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>{i18n.t("appName")}</Text>
          <LanguageToggle onChange={() => forceUpdate((n) => n + 1)} />
        </View>

        {/* Actions */}
        <TouchableOpacity style={styles.primaryButton}>
          <Text
            style={styles.primaryText}
            onPress={() => navigation.navigate("AddCustomer")}
          >
            ➕ {i18n.t("addCustomer")}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryText}>
            🔍 {i18n.t("searchCustomer")}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryText}>📋 {i18n.t("allCustomers")}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F8F6F2",
  },
  container: {
    flex: 1,
    backgroundColor: "#F8F6F2",
    padding: 20,
  },
  header: {
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#2C2C2C",
    marginBottom: 10,
  },
  primaryButton: {
    backgroundColor: "#8B0000",
    paddingVertical: 18,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 16,
  },
  primaryText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
  secondaryButton: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#DDD",
  },
  secondaryText: {
    fontSize: 16,
    color: "#2C2C2C",
    fontWeight: "500",
  },
});

