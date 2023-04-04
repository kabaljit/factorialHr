import { createComponentTheme } from '@theme/createComponentTheme';
import { tokens } from '@theme/tokens';

const { palette } = tokens;

type BottomSheetWithOptionsTheme = {
  backgroundColor: string;
};

export const bottomSheetWithOptionsTheme = createComponentTheme<BottomSheetWithOptionsTheme>({
  'factorial-dark': {
    backgroundColor: palette.mango[0],
  },
  'factorial-light': {
    backgroundColor: palette.skyBlue[9],
  },
});
