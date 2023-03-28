import React from "react";

import { H1, P } from "@designSystem/elements/Typography";

import { useModuleTranslations } from "./WelcomeScreen.i18n";
import { Container, WelcomeImage } from "./WelcomeScreen.styles";
import SuperScreen from "@designSystem/layout/SuperScreen";
import Box from "@designSystem/layout/Box";

import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { images } from "src/data";
import { NavigationProp } from "src/main/navigation/navigation.models";
import { Button } from "@designSystem/buttons/Button";

export function WelcomeScreen() {
  const { t } = useModuleTranslations();
  const navigation = useNavigation<NavigationProp>();

  return (
    <SuperScreen background="cyan" statusBarColor="light-content">
      <Box justifyContent="center" alignItems="center">
        <H1 weight="bold" color="title">
          {t("title")}
        </H1>
      </Box>

      <Box justifyContent="center" alignItems="center" flex={1}>
        <WelcomeImage source={images.welcomeIlustration} />
        <Box marginTop={14}>
          <H1 weight="bold" align="center">
            {t("welcome")}
          </H1>
        </Box>
      </Box>
      <Button
        name="login"
        onPress={() => navigation.navigate("Login")}
        title={t("login")}
      />
    </SuperScreen>
  );
}
