import { createComponentTheme } from "@theme/createComponentTheme";
import { tokens } from "@theme/tokens";

const { palette, alpha } = tokens;

type SecondaryButtonTheme = {
  backgroundColor: string;
  disabledBackgroundColor: string;
  disabledFontColor: string;
};

export const secondaryButtonTheme = createComponentTheme<SecondaryButtonTheme>({
  "factorial-dark": {
    backgroundColor: palette.cyan[0],
    disabledBackgroundColor: `${palette.cyan[0]}${alpha[30]}`,
    disabledFontColor: palette.grey[4],
  },
  "factorial-light": {
    backgroundColor: palette.cyan[0],
    disabledBackgroundColor: `${palette.cyan[0]}${alpha[30]}`,
    disabledFontColor: palette.grey[4],
  },
});
