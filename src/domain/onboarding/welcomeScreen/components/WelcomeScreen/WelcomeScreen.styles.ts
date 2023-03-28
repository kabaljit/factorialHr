import { H1 } from "@designSystem/elements/Typography";
import { tokens } from "@theme/tokens";
import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex: 1;
`;

export const WelcomeImage = styled.Image`
  width: ${tokens.sizes.half};
  aspect-ratio: 1;
`;
