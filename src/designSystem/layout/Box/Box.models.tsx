import { CSSProperties } from 'react';

import { Sizes } from '@theme/tokens';

export interface BoxPropsExtended extends React.HTMLAttributes<HTMLDivElement>, Partial<BoxProps> {
  /**
   * Name to use for data test id
   */
  name?: string;
}

export interface BoxProps {
  /**
   * Margin
   */
  margin?: Sizes;
  /**
   * Margin Top
   */
  marginTop?: Sizes;
  /**
   * Margin Bottom
   */
  marginBottom?: Sizes;
  /**
   * Margin Left
   */
  marginLeft?: Sizes;
  /**
   * Margin Right
   */
  marginRight?: Sizes;
  /**
   * Padding
   */
  padding?: Sizes;
  /**
   * Padding Top
   */
  paddingTop?: Sizes;
  /**
   * Padding Bottom
   */
  paddingBottom?: Sizes;
  /**
   * Padding Left
   */
  paddingLeft?: Sizes;
  /**
   * Padding Right
   */
  paddingRight?: Sizes;
  /**
   * Width
   */
  width?: Sizes;
  /**
   * Height
   */
  height?: Sizes;
  /**
   * Max Width
   */
  maxWidth?: Sizes;
  /**
   * Max Height
   */
  maxHeight?: Sizes;
  /**
   * Min Width
   */
  minWidth?: Sizes;
  /**
   * Min Height
   */
  minHeight?: Sizes;
  /**
   * Display
   * @see — https ://developer.mozilla.org/docs/Web/CSS/display
   */
  display: CSSProperties['display'];
  /**
   * Justify content
   * @see — https ://developer.mozilla.org/docs/Web/CSS/justify-content
   */
  justifyContent: CSSProperties['justifyContent'];
  /**
   * Align items
   * @see — https ://developer.mozilla.org/docs/Web/CSS/align-items
   */
  alignItems: CSSProperties['alignItems'];
  /**
   * Align content
   * @see — https ://developer.mozilla.org/docs/Web/CSS/align-content
   */
  alignContent: CSSProperties['alignContent'];
  /**
   * Align self
   *
   * @see — https ://developer.mozilla.org/docs/Web/CSS/align-self
   */
  alignSelf: CSSProperties['alignSelf'];
  /**
   * Flex wrap
   * @see — https ://developer.mozilla.org/docs/Web/CSS/align-wrap
   */
  flexWrap: CSSProperties['flexWrap'];
  /**
   * Flex direction
   * @see — https ://developer.mozilla.org/docs/Web/CSS/flex-direction
   */
  flexDirection: CSSProperties['flexDirection'];
  /**
   * Flex
   * @see — https ://developer.mozilla.org/docs/Web/CSS/flex
   */
  flex: CSSProperties['flex'];
  /**
   * Position
   * @see — https ://developer.mozilla.org/docs/Web/CSS/position
   */
  position: CSSProperties['position'];
  /**
   * Position Absolute - Top
   *
   */
  top?: Sizes;
  /**
   * Position Absolute - Right
   *
   */
  right?: Sizes;
  /**
   * Position Absolute - Bottom
   *
   */
  bottom?: Sizes;
  /**
   * Position Absolute - Left
   *
   */
  left?: Sizes;
}
