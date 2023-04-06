import i18next from "i18next";
import { useTranslation } from "react-i18next";

import "@lib/i18n/config";
import { Reports } from "../DashboardScreen/DashboardScreen.models";

i18next.addResourceBundle("en-GB", "Stats", {
  title: "Stats",
  [Reports.TimeEntries]: "Time Entries",
  [Reports.HoresLogged]: "Hores Logged",
  [Reports.AverageLoggedTimePerEntry]: "Average Logged Time/ Entry",
});

export function useModuleTranslations() {
  return useTranslation("Stats", { useSuspense: false });
}
