import { render } from "@testing-library/react-native";

import Stats from "./Stats";

test("Stats should render", () => {
  const { getByTestId } = render(
    <Stats firstProp="a" secondProp="b">
      Hello
    </Stats>
  );

  const statsNode = getByTestId("stats");

  expect(statsNode.props.children).toBe("Hello");
});

// TODO: Add your tests
