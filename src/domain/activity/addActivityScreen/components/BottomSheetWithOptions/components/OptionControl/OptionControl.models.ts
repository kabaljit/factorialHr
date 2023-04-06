export interface OptionControlProps {
  /**
   * Label that will visible
   */
  title: string;
  /**
   * Name will be use to generate  unique test id
   */
  name: string;
  /**
   * Action that will be excecuted when button is pressed
   */
  onPress: () => void;
}
