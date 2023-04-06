import { tokens } from "@theme/tokens";
import styled, { css } from "styled-components/native";

import { dateSliderTheme } from "./DateSlider.theme";

export const DateSliderContainer = styled.View``;

export const DateWrapper = styled.TouchableOpacity<{ $active: Boolean }>`
  background-color: ${dateSliderTheme.backgroundColor};
  width: ${tokens.sizes[50]};
  height: ${tokens.sizes[80]};
  padding: ${tokens.sizes[8]};
  margin: ${tokens.sizes[8]};
  align-items: center;
  justify-content: center;
  border-radius: ${tokens.sizes[50]};
  ${(p) =>
    p.$active &&
    css`
      background-color: ${dateSliderTheme.activeBackgroundColor};
    `}
`;
