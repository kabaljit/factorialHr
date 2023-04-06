import { createComponentTheme } from "@theme/createComponentTheme";
import { tokens } from "@theme/tokens";

const { palette } = tokens;

type StatsTheme = {
  backgroundColor: string;
};

export const statsTheme = createComponentTheme<StatsTheme>({
  "factorial-dark": {
    backgroundColor: palette.white[0],
  },
  "factorial-light": {
    backgroundColor: palette.white[0],
  },
});
