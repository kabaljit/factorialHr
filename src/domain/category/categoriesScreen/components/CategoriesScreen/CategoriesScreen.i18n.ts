import i18next from "i18next";
import { useTranslation } from "react-i18next";

import "@lib/i18n/config";

i18next.addResourceBundle("en-GB", "CategoriesScreen", {
  title: "Categories",
  welcome:
    "Welcome to the best page in the world, leave your breath at the door please",
  button: { addNewCategory: "Add new category" },
  emptyData:
    "There isn't any project yet, please start by adding a new project",
});

export function useModuleTranslations() {
  return useTranslation("CategoriesScreen", { useSuspense: false });
}
