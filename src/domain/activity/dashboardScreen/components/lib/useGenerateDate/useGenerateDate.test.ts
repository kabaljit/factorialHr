import { renderHook } from "@testing-library/react-hooks/native";
import sub from "date-fns/sub";
import { useGenerateDates } from "./useGenerateDate";

describe("useGenerateDates", () => {
  jest.useFakeTimers().setSystemTime(new Date("2023-04-05"));
  test("should generate an array of dates for the past 7 days", () => {
    const { result } = renderHook(() => useGenerateDates());

    expect(result.current).toHaveLength(7);

    for (let i = 0; i < 7; i++) {
      const expectedDate = sub(new Date(), { days: i });
      expect(result.current[i]).toEqual(expectedDate);
    }
  });
});
