import { render } from "@testing-library/react-native";

import BottomSheetWithOptions from "./BottomSheetWithOptions";

test("BottomSheetWithOptions should render", () => {
  const { getByTestId } = render(
    <BottomSheetWithOptions firstProp="a" secondProp="b">
      Hello
    </BottomSheetWithOptions>
  );

  const bottomSheetWithOptionsNode = getByTestId("bottom-sheet-with-options");

  expect(bottomSheetWithOptionsNode.props.children).toBe("Hello");
});

// TODO: Add your tests
