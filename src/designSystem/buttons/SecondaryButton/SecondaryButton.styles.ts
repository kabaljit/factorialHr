import styled, { css } from "styled-components/native";
import { Button } from "../Button";

import { secondaryButtonTheme } from "./SecondaryButton.theme";

export const SecondaryButtonContainer = styled.View`
  background-color: ${secondaryButtonTheme.backgroundColor};
`;

export const StyledButton = styled(Button)`
  background-color: ${secondaryButtonTheme.backgroundColor};

  ${(p) =>
    p.disabled &&
    css`
      background-color: ${secondaryButtonTheme.disabledBackgroundColor};
      opacity: 0.5;
    `}
`;
