import { formatDate } from "./formatDate";

describe("formatDate", () => {
  test("should format the date correctly", () => {
    const date = new Date("2023-04-03");
    const date2 = new Date("2022-05-06T10:15:00");

    const result = formatDate(date, date2);

    expect(result).toEqual(new Date("2023-04-03T10:15:00"));
  });
});
