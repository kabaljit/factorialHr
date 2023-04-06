import { Reports } from "../DashboardScreen/DashboardScreen.models";

export interface StatsProps {
  /**
   * report tha
   */
  reports: Record<Reports, Number | undefined>;
}
