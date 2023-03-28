import { tokens } from '@theme/tokens';
import styled, { css } from 'styled-components/native';
import StaticSafeAreaInsets from 'react-native-static-safe-area-insets';
import { images } from 'src/data';
import { TouchableOpacity } from 'react-native';
import { navigationButtonTheme } from './NavigationButton.theme';

export const StyledNavigationButton = styled(TouchableOpacity)<{
  $inline?: boolean;
  $safeAreaInsetsTop: number;
}>`
  position: ${(p) => (p.$inline ? 'relative' : 'absolute')};
  left: 0;
  top: ${(p) => (p.$inline ? 0 : p.$safeAreaInsetsTop)};
  padding: ${(p) => (p.$inline ? tokens.sizes[8] : tokens.sizes[20])};
  ${(p) =>
    p.$inline &&
    css`
      padding-left: ${tokens.sizes[0]};
    `};
  z-index: ${(p) => (p.$inline ? tokens.zIndices[0] : tokens.zIndices[9999])};
`;

export const BackContainer = styled.View`
  border-radius: 0;
  width: ${tokens.sizes[18]};
  height: ${tokens.sizes[12]};
  justify-content: flex-start;
  align-items: stretch;
  shadow-color: #000;
  shadow-opacity: 0;
  shadow-radius: 4px;
  shadow-offset: 0 ${tokens.sizes[2]};
`;

// export const BackIcon = styled.Image.attrs({
//   source: images.arrowLeft,
// })`
//   tint-color: ${navigationButtonTheme.labelColor};
//   width: ${tokens.sizes[18]};
//   height: ${tokens.sizes[18]};
// `;
