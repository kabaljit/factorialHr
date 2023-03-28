import { ThemeName } from "@theme/theme";
import { tokens } from "@theme/tokens";
import { SizeMap, TextColours } from "./Typography.models";

export const sizeMap: SizeMap = {
  span: "body",
  p: "body",
  h1: "headingMedium",
  h2: "headingMedium",
  h3: "headingMedium",
};

export const textColours: { [key in ThemeName]: TextColours } = {
  "factorial-light": {
    primary: tokens.palette.white[0],
    secondary: tokens.palette.grey[7],
    link: tokens.palette.skyBlue[8],
    disabled: tokens.palette.grey[6],
    title: tokens.palette.seaGreen[5],
    error: tokens.palette.red[4],
  },
  "factorial-dark": {
    primary: tokens.palette.white[0],
    secondary: tokens.palette.grey[7],
    link: tokens.palette.red[1],
    disabled: tokens.palette.grey[6],
    title: tokens.palette.seaGreen[5],
    error: tokens.palette.red[4],
  },
};
