import { createComponentTheme } from "@theme/createComponentTheme";
import { tokens } from "@theme/tokens";

const { palette } = tokens;

type TextInputTheme = {
  iconColour: string;
  fontColour: string;
  border: string;
  backgroundColor: string;
};

export const textInputTheme = createComponentTheme<TextInputTheme>({
  "factorial-dark": {
    iconColour: palette.mango[0],
    fontColour: palette.grey[9],
    border: palette.grey[3],
    backgroundColor: palette.white[0],
  },
  "factorial-light": {
    iconColour: palette.mango[0],
    fontColour: palette.grey[9],
    border: palette.mango[0],
    backgroundColor: palette.white[0],
  },
});
