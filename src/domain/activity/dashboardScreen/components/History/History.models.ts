import { Activity } from "@domain/activity/models";

export interface HistoryProps {
  activities: Activity[] | undefined;
}
