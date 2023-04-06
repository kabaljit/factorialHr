import { createComponentTheme } from "@theme/createComponentTheme";
import { tokens } from "@theme/tokens";

const { palette } = tokens;

type HistoryTheme = {
  backgroundColor: string;
};

export const historyTheme = createComponentTheme<HistoryTheme>({
  "factorial-dark": {
    backgroundColor: palette.white[0],
  },
  "factorial-light": {
    backgroundColor: palette.white[0],
  },
});
