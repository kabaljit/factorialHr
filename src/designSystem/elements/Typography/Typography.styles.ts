import styled, { css } from 'styled-components/native';

import { tokens } from '@theme/tokens';

import { TextStyles } from './Typography.models';

export const StyledText = styled.Text<TextStyles>`
  font-size: ${(p) => tokens.textSizes[p.$size].fontSize};
  font-weight: ${(p) => p.$weight};
  line-height: ${(p) => tokens.textSizes[p.$size].lineHeight};
  margin-bottom: ${(p) => p.$marginBottom};
  text-align: ${(p) => p.$textAlign};
  color: ${(p) => (p.$inherit ? 'inherit' : p.$color)};
  ${(p) =>
    p.$showEllipsis &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
    `}

  ${(p) =>
    p.$breakLine &&
    css`
      word-break: break-word;
    `}

  ${(p) =>
    p.$noWrap &&
    css`
      white-space: nowrap;
    `}
`;
