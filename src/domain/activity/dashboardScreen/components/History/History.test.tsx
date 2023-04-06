import { render } from "@testing-library/react-native";

import History from "./History";

test("History should render", () => {
  const { getByTestId } = render(
    <History firstProp="a" secondProp="b">
      Hello
    </History>
  );

  const historyNode = getByTestId("history");

  expect(historyNode.props.children).toBe("Hello");
});

// TODO: Add your tests
