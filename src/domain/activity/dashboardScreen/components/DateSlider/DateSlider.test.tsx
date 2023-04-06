import { render } from "@testing-library/react-native";

import DateSlider from "./DateSlider";

test("DateSlider should render", () => {
  const { getByTestId } = render(
    <DateSlider firstProp="a" secondProp="b">
      Hello
    </DateSlider>
  );

  const dateSliderNode = getByTestId("date-slider");

  expect(dateSliderNode.props.children).toBe("Hello");
});

// TODO: Add your tests
