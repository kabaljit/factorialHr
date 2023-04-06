import i18next from "i18next";
import { useTranslation } from "react-i18next";

import "@lib/i18n/config";

i18next.addResourceBundle("en-GB", "History", {
  title: "History",
  emptyData: "There isn't any activity yet",
});

export function useModuleTranslations() {
  return useTranslation("History", { useSuspense: false });
}
