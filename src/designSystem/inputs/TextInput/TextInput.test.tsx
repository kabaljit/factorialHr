import { fireEvent, render } from "@testing-library/react-native";

import TextInput from "./TextInput";

describe("TextInput", () => {
  jest.useFakeTimers();
  test("TextInput should render", () => {
    const { getByTestId } = render(<TextInput name="test-input" />);
    const input = getByTestId("input-test-input");
    expect(input).toBeDefined();
  });

  test("renders a transparent input when the `transparent` prop is true", () => {
    const { getByTestId } = render(<TextInput name="test-input" transparent />);
    const input = getByTestId("input-test-input");
    expect(input.props.style[0]).toEqual(
      expect.objectContaining({ margin: 0 })
    );
  });

  test("renders a password input when the `password` prop is true", () => {
    const { getByTestId } = render(<TextInput name="test-input" password />);
    const input = getByTestId("input-test-input");
    expect(input.props.secureTextEntry).toBe(true);
    fireEvent.press(getByTestId("toggle-password-icon"));
    expect(input.props.secureTextEntry).toBe(false);
  });

  test("shows an error message when the `error` prop is true", () => {
    const { getByTestId } = render(
      <TextInput
        name="test-input"
        label="Test Input"
        error
        errorMessage="This field is required"
      />
    );
    const input = getByTestId("input-test-input");
  });
});
