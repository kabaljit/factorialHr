import { Activity } from "@domain/activity/models";
import { render } from "@testing-library/react-native";

import History from "./History";

describe("History component", () => {
  beforeAll(() => {
    jest.setSystemTime(new Date(2023, 4, 6));
  });
  const activities: Activity[] = [
    {
      _id: "1",
      title: "Activity 1",
      category: "Category 1",
      startTime: 1680607800000,
      endTime: 1680611400000,
    },
    {
      _id: "2",
      title: "Activity 2",
      category: "Category 2",
      startTime: 1680675627000,
      endTime: 1680676227000,
    },
  ];

  test("renders header with correct title", () => {
    const { getByText } = render(<History activities={activities} />);
    expect(getByText("History")).toBeTruthy();
  });

  test("renders empty state message when there are no activities", () => {
    const { getByText } = render(<History activities={[]} />);
    expect(getByText("There isn't any activity yet")).toBeTruthy();
  });

  test("renders correct number of history items", () => {
    const { getAllByTestId } = render(<History activities={activities} />);
    expect(getAllByTestId("history-item")).toHaveLength(2);
  });

  test("renders correct activity data in history items", () => {
    const { getByText } = render(<History activities={activities} />);
    expect(getByText("Activity 1")).toBeTruthy();
    expect(getByText("Category 1")).toBeTruthy();
    expect(getByText("about 1 hour")).toBeTruthy();

    expect(getByText("Activity 2")).toBeTruthy();
    expect(getByText("Category 2")).toBeTruthy();
    expect(getByText("10 minutes")).toBeTruthy();
  });
});
