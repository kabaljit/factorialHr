import { createComponentTheme } from "@theme/createComponentTheme";
import { tokens } from "@theme/tokens";

const { palette } = tokens;

type DateSliderTheme = {
  backgroundColor: string;
  activeBackgroundColor: string;
};

export const dateSliderTheme = createComponentTheme<DateSliderTheme>({
  "factorial-dark": {
    backgroundColor: `${palette.white[0]}38`,
    activeBackgroundColor: palette.white[0],
  },
  "factorial-light": {
    backgroundColor: `${palette.white[0]}38`,
    activeBackgroundColor: palette.white[0],
  },
});
