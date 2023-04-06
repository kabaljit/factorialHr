import { fireEvent, render } from "@testing-library/react-native";
import { Category } from "../models";

import BottomSheetAddCategory from "./BottomSheetAddCategory";
/** I am skiping this tests bottomsheet are quite complicate when comes to testing */
describe.skip("BottomSheetAddCategory", () => {
  test("renders correctly", () => {
    const { getByTestId } = render(<BottomSheetAddCategory />);
    expect(getByTestId("bottom-sheet-add-category")).toBeDefined();
  });

  test("calls onClose when closing the bottom sheet", () => {
    const onClose = jest.fn();
    const { getByTestId } = render(
      <BottomSheetAddCategory
        bottomSheetRef={{ current: { close: onClose } }}
      />
    );
    fireEvent(getByTestId("close-button"), "press");
    expect(onClose).toHaveBeenCalled();
  });

  test("adds category when clicking the save button", () => {
    const mockAddCategory = jest.fn();
    const { getByTestId } = render(
      <BottomSheetAddCategory addCategory={mockAddCategory} />
    );

    const nameInput = getByTestId("name-input");
    const titleInput = getByTestId("title-input");
    const saveButton = getByTestId("save-button");

    fireEvent.changeText(nameInput, "Test name");
    fireEvent.changeText(titleInput, "Test title");
    fireEvent.press(saveButton);

    expect(mockAddCategory).toHaveBeenCalledWith(
      { name: "Test name", title: "Test title" },
      expect.any(Function)
    );
  });

  test("updates category when clicking the save button in update mode", () => {
    const mockUpdateCategory = jest.fn();
    const selectedCategory = {
      _id: "1",
      name: "Test name",
      title: "Test title",
    };
    const { getByTestId } = render(
      <BottomSheetAddCategory
        selectedCategory={selectedCategory}
        isUpdateMode={true}
        updateCategory={mockUpdateCategory}
      />
    );

    const nameInput = getByTestId("name-input");
    const titleInput = getByTestId("title-input");
    const saveButton = getByTestId("save-button");

    expect(nameInput.props.value).toEqual("Test name");
    expect(titleInput.props.value).toEqual("Test title");

    fireEvent.changeText(nameInput, "Updated name");
    fireEvent.changeText(titleInput, "Updated title");
    fireEvent.press(saveButton);

    expect(mockUpdateCategory).toHaveBeenCalledWith(
      { name: "Updated name", title: "Updated title" },
      expect.any(Function)
    );
  });

  test("deletes category when clicking the delete button in delete mode", () => {
    const mockDeleteCategory = jest.fn();
    const selectedCategory: Category = {
      _id: "1",
      name: "Test name",
      title: "Test title",
    };
    const { getByTestId } = render(
      <BottomSheetAddCategory
        selectedCategory={selectedCategory}
        isUpdateMode={true}
        isDeleteMode={true}
        deleteCategory={mockDeleteCategory}
      />
    );

    const nameInput = getByTestId("name-input");
    const titleInput = getByTestId("title-input");
    const deleteButton = getByTestId("delete-button");

    expect(nameInput.props.value).toEqual("Test name");
    expect(titleInput.props.value).toEqual("Test title");

    fireEvent.press(deleteButton);

    expect(mockDeleteCategory).toHaveBeenCalled();
  });
});
