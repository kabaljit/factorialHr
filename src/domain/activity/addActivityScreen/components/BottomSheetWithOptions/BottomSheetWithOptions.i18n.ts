import i18next from "i18next";
import { useTranslation } from "react-i18next";

import "@lib/i18n/config";

i18next.addResourceBundle("en-GB", "BottomSheetWithOptions", {
  title: "BottomSheetWithOptions",
  button: { cancel: "Cancel", confirm: "Confirm" },
  optionDefault: "Select a category",
});

export function useModuleTranslations() {
  return useTranslation("BottomSheetWithOptions", { useSuspense: false });
}
