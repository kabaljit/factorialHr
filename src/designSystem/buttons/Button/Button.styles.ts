import styled, { css } from "styled-components/native";

import { TextSizes, tokens } from "@theme/tokens";
import { TouchableOpacity } from "react-native";
import { ButtonProps, ButtonVariants } from "./Button.models";
import { buttonTheme } from "./Button.theme";

export const ButtonContainer = styled.View<{
  $variant: ButtonVariants;
  $fullWidth?: boolean;
  $fullHeight?: boolean;
}>`
  ${(p) =>
    p.$fullWidth &&
    css`
      width: ${tokens.sizes.full};
    `}
  ${(p) =>
    p.$fullHeight &&
    css`
      height: ${tokens.sizes.full};
    `}
`;

export const StyledButton = styled(TouchableOpacity)<ButtonProps>`


  /* display: flex; */
  justify-content: center;
  align-items: center;
  border-radius: ${(p) =>
    p.roundedCorners ? tokens.sizes[50] : tokens.sizes[0]};
  ${(p) =>
    p.variant === "outlined" &&
    css`
      border: ${tokens.sizes[1]} solid ${buttonTheme.outlined.border};
    `}
  background-color: ${(p) =>
    buttonTheme[p.variant ?? "contained"].backgroundColor};
  height: ${tokens.sizes[48]};
  width: ${(p) => (p.variant === "icon" ? tokens.sizes[20] : tokens.sizes.full)}
  padding: 0 ${tokens.sizes[10]};

  font-size: ${(p) => tokens.textSizes[p.textSize ?? "body"].fontSize};
  font-weight: ${tokens.fontWeights.normal};
`;

export const ButtonText = styled.Text<{
  $variant: ButtonVariants;
  $textSize: TextSizes;
}>`
  font-size: ${(p) => tokens.textSizes[p.$textSize ?? "body"].fontSize};
  font-weight: ${tokens.fontWeights.bold};
  color: ${(p) => buttonTheme[p.$variant ?? "contained"].label};
`;
