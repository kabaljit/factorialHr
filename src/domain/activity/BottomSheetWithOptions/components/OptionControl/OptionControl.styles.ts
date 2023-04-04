import { tokens } from "@theme/tokens";
import styled from "styled-components/native";

import { optionControlTheme } from "./OptionControl.theme";

export const OptionControlContainer = styled.TouchableOpacity`
  height: ${tokens.sizes[40]};
  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text`
  color: ${optionControlTheme.backgroundColor};
  font-size: ${tokens.sizes[16]};
  font-weight: ${tokens.fontWeights.bold};
`;
