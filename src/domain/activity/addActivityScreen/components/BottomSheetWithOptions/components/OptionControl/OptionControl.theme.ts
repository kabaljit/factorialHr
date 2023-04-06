import { createComponentTheme } from '@theme/createComponentTheme';
import { tokens } from '@theme/tokens';

const { palette } = tokens;

type OptionControlTheme = {
  backgroundColor: string;
};

export const optionControlTheme = createComponentTheme<OptionControlTheme>({
  'factorial-dark': {
    backgroundColor: palette.mango[0],
  },
  'factorial-light': {
    backgroundColor: palette.skyBlue[9],
  },
});
