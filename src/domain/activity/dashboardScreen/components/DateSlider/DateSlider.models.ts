import { Activity } from "@domain/activity/models";

export interface DateSliderProps {
  data: Date[];
  onSelect: (date: Date) => void;
  selectedDate: Date;
}
