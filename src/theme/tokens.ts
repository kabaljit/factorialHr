/**
 * Standand app palette
 */

const palette = {
  cyan: {
    /** 3ADDBB */
    0: "#15262E",
  },
  mango: {
    /**
     * #FFB900
     */
    0: "#FFB900",
    /**
     * #FFD566
     */
    1: "#FFD566",
  },
  midnightBlue: {
    /**
     * #262835
     */
    0: "#262835",
    /**
     * #090B18
     */
    1: "#090B18",
    /**
     * #090a13
     */
    2: "#090a13",
    /**
     * #303951
     */
    3: "#303951",
  },
  skyBlue: {
    /**
     * #F7FAFD
     */
    0: "#F7FAFD",
    /**
     * #E5F2FC
     */
    1: "#E5F2FC",
    /**
     * #C0DEF8
     */
    2: "#C0DEF8",
    /**
     * #99CAF4
     */
    3: "#99CAF4",
    /**
     * #75B6EF
     */
    4: "#75B6EF",
    /**
     * #5DA6EC
     */
    5: "#5DA6EC",
    /**
     * #4C97E8
     */
    6: "#4C97E8",
    /**
     * #4689DA
     */
    7: "#4267B2",
    /**
     * #3871C2
     */
    8: "#3871C2",
    /**
     * #3260B0
     */
    9: "#3260B0",
    /**
     * #EDF7FF
     */
    10: "#EDF7FF",
  },
  seaGreen: {
    /**
     * #D5F1F3
     */
    0: "#D5F1F3",
    /**
     * #C1EAED
     */
    1: "#C1EAED",
    /**
     * #ACE3E7
     */
    2: "#ACE3E7",
    /**
     * #9CDEE1
     */
    3: "#9CDEE1",
    /**
     * #82D5DA
     */
    4: "#82D5DA",
    /**
     * #6DCDD3
     */
    5: "#6DCDD3",
    /**
     * #59C7CE
     */
    6: "#59C7CE",
    /**
     * #2FB9C2
     */
    7: "#2FB9C2",
    /**
     * #238B92
     */
    8: "#238B92",
    /**
     * #185D61
     */
    9: "#185D61",
  },
  grey: {
    /**
     * #F8F8F8
     */
    0: "#F8F8F8",
    /**
     * #EDEDF4
     */
    1: "#EDEDF4",
    /**
     * #E1E1EA
     */
    2: "#E1E1EA",
    /**
     * #D4D5DD
     */
    3: "#D4D5DD",
    /**
     * #BCBCC9
     */
    4: "#BCBCC9",
    /**
     * #9699AA
     */
    5: "#9699AA",
    /**
     * #7C7E8D
     */
    6: "#7C7E8D",
    /**
     * #676978
     */
    7: "#676978",
    /**
     * #484A58
     */
    8: "#484A58",
    /**
     * #363842
     */
    9: "#363842",
    /**
     * #303951
     */
    10: "#303951",
  },
  red: {
    /**
     * #FFF2F1
     */
    0: "#FFF2F1",
    /**
     * #D95852
     */
    1: "#D95852",
    /**
     * #E89B97
     */
    2: "#E89B97",
    /**
     * #FF6C65
     */
    3: "#FF6C65",
    /**
     * #B3060F
     */
    4: "#B3060F",
  },
  yellow: {
    /**
     * #FFF8E4
     */
    0: "#FFF8E4",
    /**
     * #FF9C00
     */
    1: "#FF9C00",
  },
  green: {
    /**
     * #0BA866
     */
    0: "#0BA866",
    /**
     * #1C813F
     */
    1: "#1C813F",
  },
  white: {
    /**
     * #FFFFFF
     */
    0: "#FFFFFF",
  },
  black: {
    /**
     * #000000
     */
    0: "#000000",
  },
};

/**
 *  Specifies the opacity for a color
 * The alpha parameter is a number between 0 (fully transparent) and 100 (not transparent at all):
 */
const alpha = {
  100: "FF",
  99: "FC",
  98: "FA",
  97: "F7",
  96: "F5",
  95: "F2",
  94: "F0",
  93: "ED",
  92: "EB",
  91: "E8",
  90: "E6",
  89: "E3",
  88: "E0",
  87: "DE",
  86: "DB",
  85: "D9",
  84: "D6",
  83: "D4",
  82: "D1",
  81: "CF",
  80: "CC",
  79: "C9",
  78: "C7",
  77: "C4",
  76: "C2",
  75: "BF",
  74: "BD",
  73: "BA",
  72: "B8",
  71: "B5",
  70: "B3",
  69: "B0",
  68: "AD",
  67: "AB",
  66: "A8",
  65: "A6",
  64: "A3",
  63: "A1",
  62: "9E",
  61: "9C",
  60: "99",
  59: "96",
  58: "94",
  57: "91",
  56: "8F",
  55: "8C",
  54: "8A",
  53: "87",
  52: "85",
  51: "82",
  50: "80",
  49: "7D",
  48: "7A",
  47: "78",
  46: "75",
  45: "73",
  44: "70",
  43: "6E",
  42: "6B",
  41: "69",
  40: "66",
  39: "63",
  38: "61",
  37: "5E",
  36: "5C",
  35: "59",
  34: "57",
  33: "54",
  32: "52",
  31: "4F",
  30: "4D",
  29: "4A",
  28: "47",
  27: "45",
  26: "42",
  25: "40",
  24: "3D",
  23: "3B",
  22: "38",
  21: "36",
  20: "33",
  19: "30",
  18: "2E",
  17: "2B",
  16: "29",
  15: "26",
  14: "24",
  13: "21",
  12: "1F",
  11: "1C",
  10: "1A",
  9: "17",
  8: "14",
  7: "12",
  6: "0F",
  5: "0D",
  4: "0A",
  3: "08",
  2: "05",
  1: "03",
  0: "00",
};

/**
 * Standard size
 */
const sizes = {
  initial: "initial",
  inherit: "inherit",
  auto: "auto",
  /*
   * Required for certain scenarios such as clamp
   */
  none: "0px",
  0: "0",
  1: `1px`,
  2: `2px`,
  3: `3px`,
  4: `4px`,
  5: `5px`,
  6: `6px`,
  7: `7px`,
  8: `8px`,
  10: `10px`,
  12: `12px`,
  14: `14px`,
  15: `15px`,
  16: `16px`,
  18: `18px`,
  20: `20px`,
  22: `22px`,
  24: `24px`,
  25: `25px`,
  26: `26px`,
  28: `28px`,
  30: `30px`,
  32: `32px`,
  34: `34px`,
  36: `36px`,
  40: `40px`,
  44: `44px`,
  48: `48px`,
  50: `50px`,
  52: `52px`,
  54: `54px`,
  56: `56px`,
  58: `58px`,
  60: `60px`,
  64: `64px`,
  68: `68px`,
  72: `72px`,
  76: `76px`,
  80: `80px`,
  86: `86px`,
  88: `88px`,
  92: `92px`,
  100: `100px`,
  110: `110px`,
  124: `124px`,
  148: `148px`,
  163: `163px`,
  180: `180px`,
  /**
   * Standard button width
   */
  220: `220px`,
  280: `280px`,
  /**
   * Standard height for Dropdown containers
   */
  300: `300px`,
  /**
   * Standard input width
   */
  444: `444px`,
  /**
   * Dropdown input width (due to the close button)
   */
  488: `488px`,
  /**
   * 100%
   */
  full: "100%",
  /**
   *75%
   */
  threeQuarter: "75%",
  /**
   * 50%
   */
  half: "50%",
  /**
   * 25%
   */
  quarter: "25%",
  /**
   * 3%
   */
  thirds: "33%",
  /**
   * 224px
   */
  "3xs": `224px`,
  /**
   * 256px
   */
  "2xs": `256px`,
  /**
   * 320px
   */
  xs: `320px`,
  /**
   * 384px
   */
  sm: `384px`,
  /**
   * 444px
   */
  "1md": `444px`,
  /**
   * 448px
   */
  md: `448px`,
  /**
   * 512px
   */
  lg: `512px`,
  /**
   * 576px
   */
  xl: `576px`,
  /**
   * 672px
   */
  "2xl": `672px`,
  /**
   * 768px
   */
  "3xl": `768px`,
  /**
   * 896px
   */
  "4xl": `896px`,
  /**
   * 1024px
   */
  "5xl": `1024px`,
  /**
   * 1152px
   */
  "6xl": `1152px`,
  /**
   * 1440px
   */
  "7xl": `1440px`,
  /**
   * Standard size for tabs
   */
  tab: `167px`,
};

const textSizes: Record<
  | "none"
  | "bodySmall"
  | "inputLabelSmall"
  | "body"
  | "bodyLarge"
  | "headingSmall"
  | "headingMedium"
  | "headingLarge",
  {
    fontSize: string;
    lineHeight: string;
  }
> = {
  /**
   * None
   */
  none: {
    fontSize: sizes[0],
    lineHeight: sizes[0],
  },
  /**
   * 10px
   */
  bodySmall: {
    fontSize: sizes[10],
    lineHeight: sizes[16],
  },
  /**
   * 12px
   */
  inputLabelSmall: {
    fontSize: sizes[12],
    lineHeight: sizes[16],
  },
  /**
   * 14px
   */
  body: {
    fontSize: sizes[14],
    lineHeight: sizes[24],
  },
  /**
   * 16px
   */
  bodyLarge: {
    fontSize: sizes[16],
    lineHeight: sizes[28],
  },
  /**
   * 20px
   */
  headingSmall: {
    fontSize: sizes[20],
    lineHeight: sizes[28],
  },
  /**
   * 22px
   */
  headingMedium: {
    fontSize: sizes[22],
    lineHeight: sizes[32],
  },
  /**
   * 28px
   */
  headingLarge: {
    fontSize: sizes[28],
    lineHeight: sizes[40],
  },
};

const fontWeights = {
  /**
   * Normal - 400
   */
  normal: 400,
  /**
   * Bold - 700
   */
  bold: 700,
};

// Types
export type Sizes = keyof typeof sizes;
export type Palette = keyof typeof palette;
export type TextSizes = keyof typeof textSizes;
export type FontWeights = keyof typeof fontWeights;

export const tokens = { palette, sizes, textSizes, alpha, fontWeights };
