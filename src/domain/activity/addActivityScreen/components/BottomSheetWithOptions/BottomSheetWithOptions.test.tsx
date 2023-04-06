import { fireEvent, render } from "@test/utils";

import BottomSheetWithOptions from "./BottomSheetWithOptions";

// test("BottomSheetWithOptions should render", () => {
//   const { getByTestId } = render(
//     <BottomSheetWithOptions firstProp="a" secondProp="b">
//       Hello
//     </BottomSheetWithOptions>
//   );

//   const bottomSheetWithOptionsNode = getByTestId("bottom-sheet-with-options");

//   expect(bottomSheetWithOptionsNode.props.children).toBe("Hello");
// });

const categories = [
  {
    name: "category1",
    title: "Category 1",
  },
  {
    name: "category2",
    title: "Category 2",
  },
];

describe("BottomSheetWithOptions", () => {
  test("BottomSheetWithOptions should render", () => {
    const { getByTestId } = render(
      <BottomSheetWithOptions
        categories={categories}
        selectedValue={categories[0]}
        onCancel={() => {}}
        onConfirm={() => {}}
      />
    );

    expect(getByTestId("bottom-sheet-with-options")).toBeDefined();
  });

  test("calls onCancel when cancel button is pressed", () => {
    const onCancelMock = jest.fn();
    const { getByTestId } = render(
      <BottomSheetWithOptions
        categories={categories}
        selectedValue={categories[0]}
        onCancel={onCancelMock}
        onConfirm={() => {}}
      />
    );

    fireEvent.press(getByTestId("cancel-button"));

    expect(onCancelMock).toHaveBeenCalled();
  });

  test("calls onConfirm with selected option when confirm button is pressed", () => {
    const onConfirmMock = jest.fn();
    const { getByTestId } = render(
      <BottomSheetWithOptions
        categories={categories}
        selectedValue={categories[0]}
        onCancel={() => {}}
        onConfirm={onConfirmMock}
      />
    );

    fireEvent.press(getByTestId("confirm-button"));

    expect(onConfirmMock).toHaveBeenCalledWith(categories[0]);
  });

  test("updates selectedOption when an item is selected in the picker", () => {
    const { getByTestId } = render(
      <BottomSheetWithOptions
        categories={categories}
        selectedValue={categories[0]}
        onCancel={() => {}}
        onConfirm={() => {}}
      />
    );

    const picker = getByTestId("picker");

    fireEvent(picker, "valueChange", "category2", 1);

    expect(picker.props.selectedValue).toEqual("category2");
  });
});
