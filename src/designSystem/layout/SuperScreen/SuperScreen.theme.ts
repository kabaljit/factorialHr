import { createComponentTheme } from "@theme/createComponentTheme";
import { tokens } from "@theme/tokens";

const { palette } = tokens;

type SuperScreenTheme = {
  backgroundColor: string;
};

export const superScreenTheme = createComponentTheme<SuperScreenTheme>({
  "factorial-dark": {
    backgroundColor: palette.mango[0],
  },
  "factorial-light": {
    backgroundColor: palette.skyBlue[9],
  },
});
