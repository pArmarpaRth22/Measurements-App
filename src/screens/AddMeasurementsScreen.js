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

export default function AddMeasurementsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.back}>←</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Add Measurements</Text>
        </View>

        {/* SHIRT CARD */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>👔 Shirt</Text>

          <View style={styles.row}>
            <Input label="Length" />
            <Input label="Shoulder" />
          </View>

          <View style={styles.row}>
            <Input label="Chest" />
            <Input label="Waist" />
          </View>

          <View style={styles.row}>
            <Input label="Sleeve" />
            <Input label="Collar" />
          </View>

          <Input label="Cuff" />
          <Input label="Notes" multiline />
        </View>

        {/* PANT CARD */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>👖 Pant</Text>

          <View style={styles.row}>
            <Input label="Length" />
            <Input label="Waist" />
          </View>

          <View style={styles.row}>
            <Input label="Seat" />
            <Input label="Thigh" />
          </View>

          <View style={styles.row}>
            <Input label="Knee" />
            <Input label="Bottom" />
          </View>

          <Input label="Fly" />
          <Input label="Notes" multiline />
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveText}>Save Measurements</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

/* Reusable Input Component */
function Input({ label, multiline = false }) {
  return (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, multiline && styles.notesInput]}
        keyboardType={multiline ? "default" : "numeric"}
        multiline={multiline}
        placeholderTextColor="#9CA3AF"
      />
    </View>
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
    marginBottom: 24,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0F172A",
    marginBottom: 16,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  inputGroup: {
    width: "48%",
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 6,
    color: "#374151",
  },
  input: {
    backgroundColor: "#F9FAFB",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 15,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  notesInput: {
    height: 80,
    width: "100%",
  },

  saveButton: {
    backgroundColor: "#0F172A",
    paddingVertical: 18,
    borderRadius: 14,
    alignItems: "center",
    marginBottom: 30,
  },
  saveText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },
});
