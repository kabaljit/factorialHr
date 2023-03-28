import { createComponentTheme } from "@theme/createComponentTheme";
import { tokens } from "@theme/tokens";

const { palette } = tokens;

type NavigationButtonTheme = {
  labelColor: string;
};

const navigationButtonTheme = createComponentTheme<NavigationButtonTheme>({
  "factorial-dark": {
    labelColor: palette.skyBlue[7],
  },
  "factorial-light": {
    labelColor: palette.skyBlue[7],
  },
});

export { navigationButtonTheme };
