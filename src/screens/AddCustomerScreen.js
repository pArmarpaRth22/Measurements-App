import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import i18n from "../i18n";

export default function AddCustomerScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.back}>←</Text>
          </TouchableOpacity>
          <Text style={styles.title}>{i18n.t("addCustomer")}</Text>
        </View>

        {/* Form Card */}
        <View style={styles.card}>
          {/* Customer Name */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>{i18n.t("customerName")}</Text>
            <TextInput
              placeholder={i18n.t("customerName")}
              style={styles.input}
              placeholderTextColor="#9CA3AF"
            />
          </View>

          {/* Mobile Number */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>{i18n.t("mobileNumber")}</Text>
            <TextInput
              placeholder={i18n.t("mobileNumber")}
              style={styles.input}
              keyboardType="phone-pad"
              placeholderTextColor="#9CA3AF"
            />
          </View>

          {/* Notes */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>{i18n.t("notes")}</Text>
            <TextInput
              placeholder={i18n.t("notes")}
              style={[styles.input, styles.notesInput]}
              multiline
              placeholderTextColor="#9CA3AF"
            />
          </View>
        </View>

        {/* Save Button */}
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => navigation.navigate("AddMeasurements")}
        >
          <Text style={styles.saveText}>{i18n.t("save")}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F4F5F7",
  },
  container: {
    padding: 20,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
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

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    marginBottom: 30,
  },

  inputGroup: {
    marginBottom: 18,
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 6,
    color: "#374151",
  },
  input: {
    backgroundColor: "#F9FAFB",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 14,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  notesInput: {
    height: 100,
    textAlignVertical: "top",
  },

  saveButton: {
    backgroundColor: "#0F172A",
    paddingVertical: 18,
    borderRadius: 14,
    alignItems: "center",
  },
  saveText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },
});
