import { createComponentTheme } from "@theme/createComponentTheme";
import { tokens } from "@theme/tokens";

const { palette } = tokens;

type CategoriesScreenTheme = {
  backgroundColor: string;
};

export const categoryScreenTheme = createComponentTheme<CategoriesScreenTheme>({
  "factorial-dark": {
    backgroundColor: palette.cyan[0],
  },
  "factorial-light": {
    backgroundColor: palette.cyan[0],
  },
});
