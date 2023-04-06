import { fireEvent, render } from "@testing-library/react-native";

import DateSlider from "./DateSlider";

describe("DateSlider", () => {
  const dates = [
    new Date(2023, 4, 1),
    new Date(2023, 4, 2),
    new Date(2023, 4, 3),
    new Date(2023, 4, 4),
    new Date(2023, 4, 5),
  ];

  const onSelect = jest.fn();

  it("renders a list of dates", () => {
    const { getByText } = render(
      <DateSlider data={dates} onSelect={onSelect} selectedDate={dates[0]} />
    );

    dates.forEach((date) => {
      const formattedDate = new Intl.DateTimeFormat("en-US", {
        weekday: "short",
      }).format(date);
      console.log("formattedDate");
      expect(getByText(`${formattedDate}`)).toBeDefined();
    });
  });

  it("calls the onSelect callback when a date is selected", () => {
    const { getByText } = render(
      <DateSlider data={dates} onSelect={onSelect} selectedDate={dates[0]} />
    );

    fireEvent.press(getByText(`0${dates[2].getDate()}`));
    expect(onSelect).toHaveBeenCalledWith(dates[2]);
  });
});
