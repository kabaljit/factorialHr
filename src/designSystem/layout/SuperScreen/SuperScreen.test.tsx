import * as React from "react";
import { render } from "@testing-library/react-native";

import SuperScreen from "./SuperScreen";

test("SuperScreen should render", () => {
  const { getByTestId } = render(<SuperScreen>Hello</SuperScreen>);

  const superScreenNode = getByTestId("super-screen");

  expect(superScreenNode.props.children).toBe("Hello");
});
