// import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import i18n from "../i18n";
// import LanguageToggle from "../components/LanguageToggle";
// import { useState } from "react";

// export default function HomeScreen({ navigation }) {
//   const [, forceUpdate] = useState(0);
//   return (
//     <SafeAreaView style={styles.safeArea} edges={["top"]}>
//       <View style={styles.container}>
//         {/* Header */}
//         <View style={styles.header}>
//           <Text style={styles.title}>{i18n.t("appName")}</Text>
//           <LanguageToggle onChange={() => forceUpdate((n) => n + 1)} />
//         </View>

//         {/* Actions */}
//         <TouchableOpacity style={styles.primaryButton}>
//           <Text
//             style={styles.primaryText}
//             onPress={() => navigation.navigate("AddCustomer")}
//           >
//             ➕ {i18n.t("addCustomer")}
//           </Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.secondaryButton}>
//           <Text style={styles.secondaryText}>
//             🔍 {i18n.t("searchCustomer")}
//           </Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.secondaryButton}>
//           <Text style={styles.secondaryText}>📋 {i18n.t("allCustomers")}</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: "#F8F6F2",
//   },
//   container: {
//     flex: 1,
//     backgroundColor: "#F8F6F2",
//     padding: 20,
//   },
//   header: {
//     marginBottom: 30,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "700",
//     color: "#2C2C2C",
//     marginBottom: 10,
//   },
//   primaryButton: {
//     backgroundColor: "#8B0000",
//     paddingVertical: 18,
//     borderRadius: 10,
//     alignItems: "center",
//     marginBottom: 16,
//   },
//   primaryText: {
//     color: "#FFFFFF",
//     fontSize: 18,
//     fontWeight: "600",
//   },
//   secondaryButton: {
//     backgroundColor: "#FFFFFF",
//     paddingVertical: 16,
//     borderRadius: 10,
//     alignItems: "center",
//     marginBottom: 12,
//     borderWidth: 1,
//     borderColor: "#DDD",
//   },
//   secondaryText: {
//     fontSize: 16,
//     color: "#2C2C2C",
//     fontWeight: "500",
//   },
// });

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
          <View>
            <Text style={styles.title}>{i18n.t("appName")}</Text>
            <Text style={styles.subtitle}>{i18n.t("subtitle")}</Text>
          </View>
          <LanguageToggle onChange={() => forceUpdate((n) => n + 1)} />
        </View>

        {/* Primary Card */}
        <TouchableOpacity
          style={styles.primaryCard}
          onPress={() => navigation.navigate("AddCustomer")}
        >
          <Text style={styles.primaryIcon}>✂️</Text>
          <Text style={styles.primaryTitle}>{i18n.t("addCustomer")}</Text>
          <Text style={styles.primaryDesc}>{i18n.t("addCustomerDesc")}</Text>
        </TouchableOpacity>

        {/* Secondary Cards */}
        <View style={styles.grid}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("SearchCustomer")}
          >
            <Text style={styles.cardIcon}>🔍</Text>
            <Text style={styles.cardText}>{i18n.t("searchCustomer")}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardIcon}>📋</Text>
            <Text style={styles.cardText}>{i18n.t("allCustomers")}</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>{i18n.t("todayOverview")}</Text>

        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>{i18n.t("todayDeliveries")}</Text>
            <Text style={styles.statValue}>5</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statLabel}>{i18n.t("todayMeasurements")}</Text>
            <Text style={styles.statValue}>12</Text>
          </View>
        </View>

        <View style={styles.revenueCard}>
          <Text style={styles.statLabel}>{i18n.t("monthRevenue")}</Text>cd ..
          <Text style={styles.revenueValue}>₹ 42,500</Text>
        </View>
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
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#1F2937",
  },
  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 4,
  },

  primaryCard: {
    backgroundColor: "#0F172A",
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
  },
  primaryIcon: {
    fontSize: 32,
    marginBottom: 10,
  },
  primaryTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 6,
  },
  primaryDesc: {
    fontSize: 14,
    color: "#CBD5E1",
  },

  grid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
  },
  cardIcon: {
    fontSize: 28,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1F2937",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1F2937",
    marginTop: 30,
    marginBottom: 12,
  },

  statsGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  statCard: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 18,
  },

  statLabel: {
    fontSize: 13,
    color: "#6B7280",
    marginBottom: 6,
  },

  statValue: {
    fontSize: 26,
    fontWeight: "700",
    color: "#0F172A",
  },

  revenueCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
  },

  revenueValue: {
    fontSize: 28,
    fontWeight: "800",
    color: "#16A34A", // green = money
  },
});
