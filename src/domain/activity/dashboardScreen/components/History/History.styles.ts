import { tokens } from "@theme/tokens";
import styled from "styled-components/native";

import { historyTheme } from "./History.theme";

export const HistoryContainer = styled.View`
  background-color: ${historyTheme.backgroundColor};
`;

export const HistoryItem = styled.View`
  background-color: ${historyTheme.backgroundColor};
  border-radius: ${tokens.sizes[8]};
  padding: ${tokens.sizes[4]};
  padding-left: ${tokens.sizes[8]};
  padding-right: ${tokens.sizes[8]};
  margin-bottom: ${tokens.sizes[4]};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Header = styled.View`
  background-color: ${historyTheme.backgroundColor};
  border-radius: ${tokens.sizes[8]};
  margin-bottom: ${tokens.sizes[4]};
  padding-left: ${tokens.sizes[8]};
  padding: ${tokens.sizes[8]};
`;
