import { TextInputProps as RNTextInputProps } from 'react-native-paper/lib/typescript/components/TextInput/TextInput';

export type TextInputProps = RNTextInputProps & {
  /**  Name that will be use to generate UID */
  name: string;
  /**
   * Text label
   * */
  transparent: boolean;

  password: boolean;

  errorMessage?: string;
};
