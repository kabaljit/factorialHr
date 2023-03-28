import i18next from "i18next";
import { useTranslation } from "react-i18next";

import "@lib/i18n/config";

i18next.addResourceBundle("en-GB", "DashboardScreen", {
  title: "Dashboard",
  welcome:
    "sss to the best page in the world, leave your breath at the door please",
});

export function useModuleTranslations() {
  return useTranslation("DashboardScreen", { useSuspense: false });
}
