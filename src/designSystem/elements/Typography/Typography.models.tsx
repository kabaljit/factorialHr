import { FontWeights, Sizes, TextSizes, tokens } from "@theme/tokens";
import { ReactNode } from "react";

type TextAlignOptions = "left" | "right" | "center" | "start" | "end";

export type TextStyles = {
  $size: keyof typeof tokens.textSizes;
  $weight: number;
  $marginBottom: string;
  $textAlign: string;
  $color: string;
  $showEllipsis?: boolean;
  $noWrap?: boolean;
  $breakLine?: boolean;
  $inherit: boolean;
};

export interface TextProps {
  /**
   * Font weight
   * @param normal 400
   * @param bold 600
   * */
  weight?: FontWeights;
  /**
   * Text size
   * @param small 10px
   * @param info 13px
   * @param normal 16px
   * */
  size?: TextSizes;
  /**
   * Bottom margin of the paragraph
   */
  marginBottom?: Sizes;
  /**
   * Text alignment
   */
  align?: TextAlignOptions;
  /**
   * Colour to choose
   */
  color?: keyof TextColours;
  /**
   * Variant
   */
  variant: TextVariant;
  /**
   * Show ellipsis for overflown text
   */
  showEllipsis?: boolean;
  /**
   * Do not wrap on whitespace
   */
  noWrap?: boolean;
  /**
   * Whether one line text should split onto multiple lines
   */
  breakLine?: boolean;
  /**
   * Inherits colour instead of setting itself
   */
  inherit?: boolean;
  /**
   * Tooltip text
   */
  tooltip?: string;
  children?: ReactNode;
  /**
   * HTML Id
   */
  id?: string;
}

export type TextVariant = "span" | "p" | "h1" | "h2" | "h3";

export type TextColours = {
  primary: string;
  secondary: string;
  link: string;
  disabled: string;
  title: string;
  error: string;
};

export type SizeMap = {
  [key in TextVariant]: TextSizes;
};
