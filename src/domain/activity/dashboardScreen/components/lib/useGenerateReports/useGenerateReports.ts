import { Activity } from "@domain/activity/models";
import differenceInMinutes from "date-fns/differenceInMinutes";
import {
  ReportPeriod,
  Reports,
} from "../../DashboardScreen/DashboardScreen.models";

export const ReportInfo = {
  [ReportPeriod.Daily]: [
    { name: Reports.TimeEntries },
    { name: Reports.HoresLogged },
    { name: Reports.AverageLoggedTimePerEntry },
  ],
  week: [],
};

/**
 *
 * Hook which returns the report
 */
export const useGenerateReport = (
  data: Activity[] | undefined,
  reportPeriod: ReportPeriod
) => {
  if (!data)
    return {
      [Reports.TimeEntries]: 0,
      [Reports.HoresLogged]: 0,
      [Reports.AverageLoggedTimePerEntry]: 0,
    };

  if (reportPeriod === ReportPeriod.Daily) {
    const horesLogged = getHoresLogged(data);
    return {
      [Reports.TimeEntries]: data.length,
      [Reports.HoresLogged]: horesLogged,
      [Reports.AverageLoggedTimePerEntry]: horesLogged / data.length,
    };
  }
  return {
    [Reports.TimeEntries]: 0,
    [Reports.HoresLogged]: 0,
    [Reports.AverageLoggedTimePerEntry]: 0,
  };
};

function getHoresLogged(data: Activity[]) {
  let horesLogged = 0;
  data.forEach((activity) => {
    horesLogged += differenceInMinutes(
      new Date(activity.endTime),
      new Date(activity.startTime)
    );
  });
  return horesLogged;
}
