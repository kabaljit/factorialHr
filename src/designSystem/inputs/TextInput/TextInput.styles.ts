import styled from 'styled-components/native';
import { tokens } from '@theme/tokens';

import { TextStyle, StyleProp } from 'react-native';

import { textInputTheme } from './TextInput.theme';

export const inputStyle: StyleProp<TextStyle> = {
  color: tokens.palette.black[0],
  borderColor: tokens.palette.grey[3],
  backgroundColor: tokens.palette.grey[0],
  borderWidth: 1,
  // height: 44,
  borderRadius: 8,
};

export const transparentInputStyle: StyleProp<TextStyle> = {
  ...inputStyle,
  borderWidth: 'none',
  backgroundColor: 'transparent',
};
