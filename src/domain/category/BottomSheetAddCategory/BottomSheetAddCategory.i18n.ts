import i18next from "i18next";
import { useTranslation } from "react-i18next";

import "@lib/i18n/config";

i18next.addResourceBundle("en-GB", "BottomSheetAddCategory", {
  title: "Add a new project/topic",
  updateTitle: "Update project/topic",
  button: {
    addCategory: "Add",
    updateCategory: "Update",
    deleteCategory: "Delete",
  },
  input: {
    title: {
      placeholder: "Title",
    },
    name: {
      placeholder: "Name",
      info: "Name is use for internal use. Not visible to end user.",
    },
  },
});

export function useModuleTranslations() {
  return useTranslation("BottomSheetAddCategory", { useSuspense: false });
}
