import { tokens } from "@theme/tokens";

export interface SuperScreenProps {
  children: React.ReactNode;
  keyboardAvoiding?: boolean;
  statusBarColor?: "light-content" | "dark-content";
  background?: keyof typeof tokens.palette;
  /**
   * Header offset for keyboard avoiding view which causes the button
   * to be behind the keyboard.
   *
   */
  keyboardVerticalOffset?: number;
  statusBarBackground?: keyof typeof tokens.palette;
  loading?: boolean;
  /**
   * SuperScreen content is always within device safe area unless this prop
   * is set to `true`.
   */
  fullscreen?: boolean;
  scrollable?: boolean;
  hasPadding?: boolean;
  justifyContent?: "space-between" | "flex-start";
  flex?: keyof typeof tokens.sizes;
  /** True if content contain a flatlist. Note: without this flatlist is not scrollable */
  containContentScrollable?: boolean;
}
