import { TextSizes } from '@theme/tokens';
import { ButtonHTMLAttributes, FunctionComponent } from 'react';
import { ButtonProps as RNButtonProps } from 'react-native';

export interface ButtonProps extends RNButtonProps {
  /**
   * Aside from the standard functionality of the `name` prop in HTML, test id and analytics event names will be generated using the value given for this.
   */
  name: HTMLButtonElement['name'];
  /**
   * Button loading state
   */
  busy?: boolean;
  /**
   * Variant
   * @default contained
   */
  variant?: ButtonVariants;
  /**
   * Size
   * @default default
   */
  size?: 'default' | 'contained';
  /**
   * Icon
   */
  Icon?: FunctionComponent;
  /**
   * If set to true, it will occupy all available parent width space as opposed to its
   * default behaviour of keeping a fixed width
   */
  fullWidth?: boolean;
  /**
   * If set to true, it will occupy all available parent height space as opposed to its
   * default behaviour of keeping a fixed height
   */
  fullHeight?: boolean;

  /**
   * Button with rounded corners
   */
  roundedCorners?: boolean;
  /**
   * Optional font size for the button label, defaults to `body`
   */
  textSize?: TextSizes;
}

export type ButtonVariants = 'contained' | 'outlined' | 'icon' | 'pill' | 'transparent';
