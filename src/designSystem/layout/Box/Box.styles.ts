import styled from 'styled-components/native';

export const BoxContainer = styled.View<{ $parsedCss: string }>`
  ${(p) => p.$parsedCss}
`;
