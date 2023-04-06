import endOfWeek from "date-fns/endOfWeek";
import startOfWeek from "date-fns/startOfWeek";
import { ReportPeriod } from "../../DashboardScreen/DashboardScreen.models";
import { useGenerateFilter } from "./useGenerateFilters";

describe("useGenerateFilter", () => {
  jest.useFakeTimers().setSystemTime(new Date("2023-04-05"));
  it("returns the correct start and end time for Daily report period", () => {
    const date = new Date("2023-04-06");
    const reportPeriod = ReportPeriod.Daily;
    const { time } = useGenerateFilter(date, reportPeriod);

    expect(time.start).toBe(date.setHours(0, 0, 0, 0));
    expect(time.end).toBe(1680822000000);
  });

  it("returns the correct start and end time for Weekly report period", () => {
    const date = new Date("2023-04-06");
    const reportPeriod = ReportPeriod.Weekly;
    const { time } = useGenerateFilter(date, reportPeriod);
    expect(time.start).toBe(new Date("2023-04-02 00:00:00").getTime());
    expect(time.end).toBe(new Date("2023-04-08 23:59:59.999").getTime());
  });

  it("returns the correct start and end time for Monthly report period", () => {
    const date = new Date("2023-04-06");
    const reportPeriod = ReportPeriod.Monthly;
    const { time } = useGenerateFilter(date, reportPeriod);
    expect(time.start).toBe(new Date("2023-04-01 00:00:00").getTime());
    expect(time.end).toBe(new Date("2023-04-30 23:59:59.999").getTime());
  });
});
