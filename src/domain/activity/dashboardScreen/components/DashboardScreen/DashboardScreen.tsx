import React from "react";
import { Text } from "react-native";

import SuperScreen from "@designSystem/layout/SuperScreen";
import { useModuleTranslations } from "./DashboardScreen.i18n";
import { Container } from "./DashboardScreen.styles";

export function DashboardScreen() {
  const { t } = useModuleTranslations();

  return <SuperScreen>{<Text>{t("welcome")}</Text>}</SuperScreen>;
}
