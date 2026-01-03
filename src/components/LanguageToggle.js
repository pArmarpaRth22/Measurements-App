import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import i18n, { changeLanguage } from "../i18n";

export default function LanguageToggle({ onChange }) {
  const switchLanguage = async (lang) => {
    await changeLanguage(lang);
    onChange(); // re-render app
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, i18n.locale === "en" && styles.activeButton]}
        onPress={() => switchLanguage("en")}
      >
        <Text style={styles.text}>English</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, i18n.locale === "gu" && styles.activeButton]}
        onPress={() => switchLanguage("gu")}
      >
        <Text style={styles.text}>ગુજરાતી</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 6,
    marginHorizontal: 5,
  },
  activeButton: {
    backgroundColor: "#333",
  },
  text: {
    color: "#000",
    fontWeight: "600",
  },
});
