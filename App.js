import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { setI18nConfig } from "./src/i18n";
import i18n from "./src/i18n";
import LanguageToggle from "./src/components/LanguageToggle";

export default function App() {
  const [ready, setReady] = useState(false);
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    const init = async () => {
      await setI18nConfig();
      setReady(true);
    };
    init();
  }, []);

  if (!ready) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading app...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <LanguageToggle onChange={() => forceUpdate((n) => n + 1)} />
      <Text>{i18n.t("appName")}</Text>
      <Text>{i18n.t("addCustomer")}</Text>
    </View>
  );
}
