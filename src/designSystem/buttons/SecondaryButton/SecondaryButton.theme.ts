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
    backgroundColor: palette.cian[0],
    disabledBackgroundColor: `${palette.cian[0]}${alpha[30]}`,
    disabledFontColor: palette.grey[4],
  },
  "progress-light": {
    backgroundColor: palette.cian[0],
    disabledBackgroundColor: `${palette.cian[0]}${alpha[30]}`,
    disabledFontColor: palette.grey[4],
  },
});
