import { Category } from "@domain/category/models";

export interface DatePickerFields {
  date: Date;
  startTime?: Date;
  endTime?: Date;
}

export interface AddActivityValues extends DatePickerFields {
  title: string;
  category?: Category;
}
