import { render } from "@testing-library/react-native";

import BottomSheetAddCategory from "./BottomSheetAddCategory";

test("BottomSheetAddCategory should render", () => {
  const { getByTestId } = render(
    <BottomSheetAddCategory firstProp="a" secondProp="b">
      Hello
    </BottomSheetAddCategory>
  );

  const bottomSheetAddCategoryNode = getByTestId("bottom-sheet-add-category");

  expect(bottomSheetAddCategoryNode.props.children).toBe("Hello");
});

// TODO: Add your tests
