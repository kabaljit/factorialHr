import { tokens } from "@theme/tokens";
import styled from "styled-components/native";
import { categoryScreenTheme } from "./CategoriesScreen.theme";

export const Container = styled.View`
  display: flex;
  flex: 1;
`;

export const CategoryContainer = styled.TouchableOpacity`
  border-radius: ${tokens.sizes[8]};
  background-color: ${categoryScreenTheme.backgroundColor};
  padding: ${tokens.sizes[14]};
  margin-bottom: ${tokens.sizes[14]};
`;
