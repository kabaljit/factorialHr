import addDays from "date-fns/addDays";
import endOfDay from "date-fns/endOfDay";
import endOfMonth from "date-fns/endOfMonth";
import endOfWeek from "date-fns/endOfWeek";
import format from "date-fns/format";
import nextDay from "date-fns/nextDay";
import previousMonday from "date-fns/previousMonday";
import startOfDay from "date-fns/startOfDay";
import startOfMonth from "date-fns/startOfMonth";
import startOfWeek from "date-fns/startOfWeek";
import { ReportPeriod } from "../../DashboardScreen/DashboardScreen.models";

export const useGenerateFilter = (date: Date, reportPeriod: ReportPeriod) => {
  let start, end;
  if (reportPeriod === ReportPeriod.Daily) {
    start = startOfDay(date).getTime();
    end = startOfDay(addDays(date, 1)).getTime();
  } else if (reportPeriod === ReportPeriod.Weekly) {
    start = startOfWeek(date).getTime();
    end = endOfWeek(date).getTime();
  } else {
    start = startOfMonth(date);
    end = endOfMonth(date).getTime();
  }
  return { time: { start, end } };
};
