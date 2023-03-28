import i18next from "i18next";
import { useTranslation } from "react-i18next";

import "@lib/i18n/config";

i18next.addResourceBundle("en-GB", "WelcomeScreen", {
  title: "Time Tracker by Kabaljit",
  welcome:
    "Welcome!\nTogether we will tracker your activity and improve your producivity!",
  login: "Login",
});

export function useModuleTranslations() {
  return useTranslation("WelcomeScreen", { useSuspense: false });
}
