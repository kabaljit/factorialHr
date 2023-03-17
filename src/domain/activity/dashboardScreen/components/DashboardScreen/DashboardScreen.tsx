import React from "react";
import { Text } from "react-native";

// import { P } from '@designSystem/elements/Typography';

import { useModuleTranslations } from "./DashboardScreen.i18n";
import { Container } from "./DashboardScreen.styles";

export function DashboardScreen() {
  const { t } = useModuleTranslations();

  return <Container>{<Text>{t("welcome")}</Text>}</Container>;
}
