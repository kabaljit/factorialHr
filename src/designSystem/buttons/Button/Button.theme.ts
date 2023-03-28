import { createComponentTheme } from "@theme/createComponentTheme";
import { tokens } from "@theme/tokens";
import { ButtonVariants } from "./Button.models";

const { palette } = tokens;

interface ButtonStyles {
  backgroundColor: string;
  label: string;
  hoverBg: string;
  hoverLabel: string;
  border: string;
  focus: string;
  disabledBg: string;
  disabledLabel: string;
  disabledBorder: string;
  icon: string;
  iconHoverBg: string;
}

type ButtonTheme = {
  [key in ButtonVariants]: ButtonStyles;
};

export const buttonTheme = createComponentTheme<ButtonTheme>({
  "factorial-light": {
    contained: {
      backgroundColor: palette.white[0],
      label: palette.black[0],
      hoverBg: palette.mango[1],
      hoverLabel: palette.midnightBlue[0],
      border: "none",
      focus: palette.white[0],
      disabledBg: palette.grey[2],
      disabledLabel: palette.grey[6],
      disabledBorder: "none",
      icon: palette.midnightBlue[0],
      iconHoverBg: palette.midnightBlue[0],
    },
    outlined: {
      backgroundColor: tokens.palette.white[0],
      label: palette.midnightBlue[0],
      hoverBg: palette.mango[1],
      hoverLabel: palette.midnightBlue[0],
      border: palette.cyan[0],
      focus: palette.white[0],
      disabledBg: palette.white[0],
      disabledLabel: palette.grey[6],
      disabledBorder: palette.grey[6],
      icon: palette.midnightBlue[0],
      iconHoverBg: palette.midnightBlue[0],
    },
    icon: {
      backgroundColor: "transparent",
      label: palette.midnightBlue[0],
      hoverBg: palette.mango[1],
      hoverLabel: palette.midnightBlue[0],
      border: palette.skyBlue[7],
      focus: palette.white[0],
      disabledBg: palette.white[0],
      disabledLabel: palette.grey[6],
      disabledBorder: palette.grey[6],
      icon: palette.midnightBlue[0],
      iconHoverBg: palette.midnightBlue[0],
    },
    transparent: {
      backgroundColor: "transparent",
      label: palette.black[0],
      hoverBg: palette.mango[1],
      hoverLabel: palette.midnightBlue[0],
      border: "none",
      focus: palette.white[0],
      disabledBg: palette.grey[2],
      disabledLabel: palette.grey[6],
      disabledBorder: "none",
      icon: palette.midnightBlue[0],
      iconHoverBg: palette.midnightBlue[0],
    },
  },
  "factorial-dark": {
    contained: {
      backgroundColor: palette.mango[0],
      label: palette.midnightBlue[0],
      hoverBg: palette.mango[1],
      hoverLabel: palette.midnightBlue[0],
      border: "none",
      focus: palette.white[0],
      disabledBg: palette.grey[7],
      disabledLabel: palette.white[0],
      disabledBorder: "none",
      icon: palette.midnightBlue[0],
      iconHoverBg: palette.midnightBlue[0],
    },
    outlined: {
      backgroundColor: "transparent",
      label: palette.midnightBlue[0],
      hoverBg: palette.mango[1],
      hoverLabel: palette.midnightBlue[0],
      border: palette.mango[0],
      focus: palette.white[0],
      disabledBg: palette.white[0],
      disabledLabel: palette.grey[6],
      disabledBorder: palette.grey[6],
      icon: palette.midnightBlue[0],
      iconHoverBg: palette.midnightBlue[0],
    },
    icon: {
      backgroundColor: "transparent",
      label: palette.midnightBlue[0],
      hoverBg: palette.mango[1],
      hoverLabel: palette.midnightBlue[0],
      border: palette.mango[0],
      focus: palette.white[0],
      disabledBg: palette.white[0],
      disabledLabel: palette.grey[6],
      disabledBorder: palette.grey[6],
      icon: palette.midnightBlue[0],
      iconHoverBg: palette.midnightBlue[0],
    },
    transparent: {
      backgroundColor: "transparent",
      label: palette.black[0],
      hoverBg: palette.mango[1],
      hoverLabel: palette.midnightBlue[0],
      border: "none",
      focus: palette.white[0],
      disabledBg: palette.grey[2],
      disabledLabel: palette.grey[6],
      disabledBorder: "none",
      icon: palette.midnightBlue[0],
      iconHoverBg: palette.midnightBlue[0],
    },
  },
});
