// @typescript-eslint/naming-convention
import { tokens } from '@theme/tokens';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Box from '../Box';

export const SuperScreenContainer = styled(Box)<{
  background: keyof typeof tokens.palette;
  flex: keyof typeof tokens.sizes;
}>`
  background-color: ${(p) => tokens.palette[p.background][0]};
`;

export const ScrollableContent = styled.ScrollView.attrs({
  keyboardShouldPersistTaps: 'handled',
  contentContainerStyle: {
    flexGrow: 1,
  },
})`
  flex: 1;
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === 'ios' ? 'padding' : undefined,
})`
  flex: 1;
`;

export const SafeArea = styled.SafeAreaView`
  flex: 1;
`;

export const ContainerNoPadding = styled(Box)`
  flex: 1;
`;
