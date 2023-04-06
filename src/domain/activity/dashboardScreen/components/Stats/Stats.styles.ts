import { tokens } from "@theme/tokens";
import styled from "styled-components/native";

import { statsTheme } from "./Stats.theme";

export const StatsContainer = styled.View`
  background-color: ${statsTheme.backgroundColor};
  border-radius: ${tokens.sizes[16]};
  margin-bottom: ${tokens.sizes[14]};
  margin-top: ${tokens.sizes[14]};
  flex-direction: row;
  justify-content: space-between;
  padding: ${tokens.sizes[8]};
`;

export const Stat = styled.View`
  background-color: ${statsTheme.backgroundColor};
  justify-content: center;
  align-items: center;
  border-radius: ${tokens.sizes[16]};
`;
