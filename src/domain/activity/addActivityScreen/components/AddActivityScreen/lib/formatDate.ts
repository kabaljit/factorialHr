import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

/**
 *
 *
 * @param date Date only the date/ month / year will be used
 * @param date2 Date only the hours/ minute will be used
 * @returns
 */
export const formatDate = (date: Date, date2: Date) => {
  return setMinutes(setHours(date, date2.getHours()), date2.getMinutes());
};
