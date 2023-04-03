import { tokens } from "@theme/tokens";
import styled from "styled-components/native";

import { bottomSheetAddCategoryTheme } from "./BottomSheetAddCategory.theme";

export const BottomSheetAddCategoryContainer = styled.View`
  background-color: ${bottomSheetAddCategoryTheme.backgroundColor};
`;

export const DeleteTouchableOpacity = styled.TouchableOpacity`
  background-color: ${bottomSheetAddCategoryTheme.deleteBackgroundColor};
  border-radius: ${tokens.sizes[14]};
  width: ${tokens.sizes[32]};
  padding: ${tokens.sizes[4]};
`;
