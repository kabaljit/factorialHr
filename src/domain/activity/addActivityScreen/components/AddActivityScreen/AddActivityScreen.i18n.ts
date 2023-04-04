import i18next from "i18next";
import { useTranslation } from "react-i18next";

import "@lib/i18n/config";

i18next.addResourceBundle("en-GB", "AddActivityScreen", {
  title: " Add your activity",
  input: {
    title: {
      placeholder: "Title",
      error: {
        required: "Title is required",
      },
    },
    date: {
      placeholder: "Date",
      error: {
        required: "Date is required",
      },
    },
    category: {
      placeholder: "Category",
      error: {
        required: "Select a category",
      },
    },
    startTime: {
      placeholder: "Start Time",
      error: {
        required: "Start time is required",
        greaterThenEndTime: "Start time can't be before End time ",
      },
    },
    endTime: {
      placeholder: "End Time",
      error: {
        required: "End time is required",
        lowerThenStartTime: "End time can't be before Start time",
      },
    },
  },
});

export function useModuleTranslations() {
  return useTranslation("AddActivityScreen", { useSuspense: false });
}
