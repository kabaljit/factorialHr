import { render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";
import {
  ReportPeriod,
  Reports,
} from "../DashboardScreen/DashboardScreen.models";

import Stats from "./Stats";

describe("Stats component", () => {
  const reports = {
    [Reports.AverageLoggedTimePerEntry]: 90,
    [Reports.HoresLogged]: 180,
    [Reports.TimeEntries]: 2,
  };

  test("renders stats container with no reports", () => {
    const { getByTestId } = render(<Stats reports={undefined} />);
    expect(getByTestId("stats")).toBeTruthy();
  });

  test("renders stats container with reports", () => {
    const { getByTestId } = render(<Stats reports={reports} />);
    expect(getByTestId("stats")).toBeTruthy();
  });

  test("renders correct values for stats", () => {
    const { getByText } = render(<Stats reports={reports} />);
    expect(getByText("90")).toBeTruthy();
    expect(getByText("180")).toBeTruthy();
    expect(getByText("2")).toBeTruthy();
  });
});
