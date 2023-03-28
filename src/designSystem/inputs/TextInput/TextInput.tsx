/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { TextInput as RNPaperTextInput } from 'react-native-paper';

import useUid from '@lib/hooks/useUid';
import { tokens } from '@theme/tokens';

import { inputStyle, transparentInputStyle } from './TextInput.styles';
import { TextInputProps } from './TextInput.models';
import { textInputTheme } from './TextInput.theme';

function TextInput({ name, transparent, password, errorMessage, label, error, style, ...rest }: TextInputProps) {
  const uid = useUid('input', name);
  const [secureTextEntry, setSecureTextEntry] = useState(password);

  return (
    <RNPaperTextInput
      style={[transparent ? transparentInputStyle : inputStyle, style]}
      activeUnderlineColor={tokens.palette.cian[0]}
      testID={uid}
      theme={{ roundness: 8 }}
      underlineStyle={{ marginLeft: 12, marginRight: 12 }}
      outlineStyle={{ borderWidth: 3, borderRadius: 32 }}
      // mode='outlined'
      underlineColor={textInputTheme.backgroundColor}
      secureTextEntry={secureTextEntry}
      label={errorMessage && error ? errorMessage : label}
      error={error}
      {...(password
        ? {
            right: (
              <RNPaperTextInput.Icon
                icon={secureTextEntry ? 'eye' : 'eye-off'}
                onPress={() => setSecureTextEntry(!secureTextEntry)}
              />
            ),
          }
        : {})}
      {...rest}
    />
  );
}

export default TextInput;
