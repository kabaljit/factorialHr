import { Activity } from "@domain/activity/models";

export interface HistoryProps {
  /** History data */
  activities: Activity[] | undefined;
  /** Loading state */
  isLoading: boolean;
}
