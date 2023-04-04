import React, { useRef } from "react";
import { Text } from "react-native";

import SuperScreen from "@designSystem/layout/SuperScreen";
import { useModuleTranslations } from "./DashboardScreen.i18n";
import { Container } from "./DashboardScreen.styles";
import SecondaryButton from "@designSystem/buttons/SecondaryButton";
import Box from "@designSystem/layout/Box";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import { P } from "@designSystem/elements/Typography";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "src/main/navigation/navigation.models";
import { Button } from "@designSystem/buttons/Button";
import BottomSheetWithOptions from "@domain/activity/BottomSheetWithOptions";

export function DashboardScreen() {
  const { t } = useModuleTranslations();
  const navigation = useNavigation<NavigationProp<"Home">>();

  return (
    <SuperScreen background="cyan">
      <Box flex={1}>
        <P>{t("welcome")}</P>
      </Box>
      <Button
        name="add-category"
        onPress={() => {
          navigation.navigate("AddActivity");
        }}
        title=""
      >
        <Box flexDirection="row">
          <Ionicons name="add" size={24} color="black" />
          <P color="secondary">{t("button.addActivity")}</P>
        </Box>
      </Button>
    </SuperScreen>
  );
}
