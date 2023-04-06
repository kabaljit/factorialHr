import { fireEvent, render } from "@test/utils";

import OptionControl from "./OptionControl";

// test("OptionControl should render", () => {
//   const { getByTestId } = render(
//     <OptionControl firstProp="a" secondProp="b">
//       Hello
//     </OptionControl>
//   );

//   const optionControlNode = getByTestId("option-control");

//   expect(optionControlNode.props.children).toBe("Hello");
// });

describe("OptionControl", () => {
  const title = "Test Button";
  const onPress = jest.fn();
  const name = "test-button";

  it("OptionControl should render", () => {
    const { getByText } = render(
      <OptionControl title={title} onPress={onPress} name={name} />
    );

    expect(getByText(title)).toBeTruthy();
  });

  it("calls onPress when pressed", () => {
    const { getByTestId } = render(
      <OptionControl title={title} onPress={onPress} name={name} />
    );

    fireEvent.press(getByTestId(`button-option-control-${name}`));
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
