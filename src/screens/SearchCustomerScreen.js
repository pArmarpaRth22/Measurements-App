import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import i18n from "../i18n";

export default function SearchCustomerScreen({ navigation }) {
  const [query, setQuery] = useState("");

  // TEMP dummy data (we'll connect SQLite later)
  const customers = [
    { id: "1", name: "Ramesh Patel", mobile: "9876543210" },
    { id: "2", name: "Amit Shah", mobile: "9123456789" },
  ];

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.back}>←</Text>
          </TouchableOpacity>
          <Text style={styles.title}>{i18n.t("searchCustomer")}</Text>
        </View>

        {/* Search Box */}
        <View style={styles.searchCard}>
          <TextInput
            placeholder={`${i18n.t("searchCustomer")}...`}
            value={query}
            onChangeText={setQuery}
            style={styles.searchInput}
            placeholderTextColor="#9CA3AF"
          />
        </View>

        {/* Results */}
        <FlatList
          data={customers}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingTop: 10 }}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.customerCard}>
              <Text style={styles.customerName}>{item.name}</Text>
              <Text style={styles.customerMobile}>{item.mobile}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F4F5F7",
  },
  container: {
    flex: 1,
    padding: 20,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  back: {
    fontSize: 22,
    marginRight: 12,
    color: "#0F172A",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#0F172A",
  },

  searchCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 10,
  },
  searchInput: {
    fontSize: 16,
    color: "#111827",
  },

  customerCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
  },
  customerName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 4,
  },
  customerMobile: {
    fontSize: 14,
    color: "#6B7280",
  },
});
