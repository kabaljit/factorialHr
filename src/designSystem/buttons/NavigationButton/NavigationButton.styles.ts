import { tokens } from "@theme/tokens";
import styled, { css } from "styled-components/native";
import StaticSafeAreaInsets from "react-native-static-safe-area-insets";
import { images } from "src/data";
import { TouchableOpacity } from "react-native";
import { navigationButtonTheme } from "./NavigationButton.theme";

export const StyledNavigationButton = styled(TouchableOpacity)<{
  $inline?: boolean;
  $safeAreaInsetsTop: number;
}>`
  position: ${(p) => (p.$inline ? "relative" : "absolute")};
  left: 0;
  top: ${(p) => (p.$inline ? 0 : p.$safeAreaInsetsTop)};
  padding: ${(p) => (p.$inline ? tokens.sizes[8] : tokens.sizes[20])};
  ${(p) =>
    p.$inline &&
    css`
      padding-left: ${tokens.sizes[0]};
    `};
  z-index: ${(p) => (p.$inline ? 0 : 100)};
`;

export const BackContainer = styled.View`
  border-radius: 0;
  width: ${tokens.sizes[28]};
  height: ${tokens.sizes[24]};
  justify-content: flex-start;
  align-items: stretch;
  shadow-color: #000;
  shadow-opacity: 0;
  shadow-radius: 4px;
  shadow-offset: 0 ${tokens.sizes[2]};
`;
