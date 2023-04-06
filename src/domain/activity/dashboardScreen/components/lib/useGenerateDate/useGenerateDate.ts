import sub from "date-fns/sub";
import { useMemo } from "react";

export const useGenerateDates = () => {
  const length = 7;
  const newDates = useMemo(() => {
    const newDates = [];
    for (let i = 0; i < length; i++) {
      newDates.push(sub(new Date(), { days: i }));
    }
    return newDates;
  }, []);

  return newDates;
};
