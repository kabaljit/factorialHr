import { createComponentTheme } from "@theme/createComponentTheme";
import { tokens } from "@theme/tokens";

const { palette } = tokens;

type BottomSheetAddCategoryTheme = {
  backgroundColor: string;
  deleteBackgroundColor: string;
};

export const bottomSheetAddCategoryTheme =
  createComponentTheme<BottomSheetAddCategoryTheme>({
    "factorial-dark": {
      backgroundColor: palette.mango[0],
      deleteBackgroundColor: palette.red[4],
    },
    "factorial-light": {
      backgroundColor: palette.skyBlue[9],
      deleteBackgroundColor: palette.red[4],
    },
  });
