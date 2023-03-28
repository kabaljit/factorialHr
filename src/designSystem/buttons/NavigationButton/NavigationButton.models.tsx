import { ButtonHTMLAttributes } from 'react';

export interface NavigationButtonProps {
  /**
   * Used to build the test ID
   * */
  name: string;
  /**
   * If false or undefined, button will have a fixed position within its
   * container (top left). Otherwise it will lay out like a normal view.
   */
  inline?: boolean;
  /**
   * What happens when this button is tapped?
   */
  onPress: () => void;
}
