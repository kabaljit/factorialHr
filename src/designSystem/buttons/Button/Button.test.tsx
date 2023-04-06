import * as React from "react";

import { fireEvent, render } from "@test/utils";
import { Button } from "./Button";

const uid = "button-test";

describe("Button", () => {
  test("Button Test", () => {
    const { getByTestId } = render(<Button name="test" title="Hello" />);

    const buttonNode = getByTestId(uid);

    expect(buttonNode).toBeDefined();
  });

  test("calls onPress function when clicked", () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <Button name="test" title="Click me!" onPress={onPressMock} />
    );
    const buttonNode = getByTestId(uid);
    fireEvent.press(buttonNode);
    expect(onPressMock).toHaveBeenCalled();
  });

  test("disables the button when busy prop is true", () => {
    const { getByTestId } = render(
      <Button name="test" title="Click me!" busy={true} />
    );
    const buttonNode = getByTestId(uid);
    expect(buttonNode.props.accessibilityState.disabled).toBeTruthy();
  });

  it("disables the button when disabled prop is true", () => {
    const { getByTestId } = render(
      <Button name="test" title="Click me!" disabled />
    );
    const buttonNode = getByTestId(uid);
    expect(buttonNode.props.accessibilityState.disabled).toBeTruthy();
  });
});
