import { render } from "@testing-library/react-native";
import NavigationButton from "./NavigationButton";

describe("Navigation Button", () => {
  test("Back button", async () => {
    const buttonLabel = "retreat melons";
    const { getByTestId, queryByTestId } = render(
      <NavigationButton name="back" onPress={() => jest.fn()} />
    );

    const navigationBackButton = getByTestId("navigation-button-back");

    expect(navigationBackButton).toBeDefined();
  });
});
