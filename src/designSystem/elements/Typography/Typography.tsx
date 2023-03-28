import React, { forwardRef, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { tokens } from '@theme/tokens';
import { StyledText } from './Typography.styles';
import { TextProps } from './Typography.models';
import { sizeMap, textColours } from './Typography.theme';

const Text = forwardRef<HTMLParagraphElement, TextProps>((props, ref) => {
  const {
    weight = 'normal',
    size,
    children,
    marginBottom = 0,
    align = 'left',
    color = 'primary',
    inherit = false,
    showEllipsis = false,
    breakLine = false,
    noWrap = false,
    variant,
    tooltip,
    id,
    ...rest
  } = props;

  const { fontWeights, sizes } = tokens;
  const { currentTheme } = useContext<string>(ThemeContext);

  const internalSize = size ?? sizeMap[variant] ?? 'body';

  return (
    <StyledText
      ref={ref}
      $size={internalSize}
      $inherit={inherit}
      $weight={fontWeights[weight]}
      $marginBottom={sizes[marginBottom]}
      $textAlign={align}
      $color={textColours[currentTheme][color]}
      $showEllipsis={showEllipsis}
      $noWrap={noWrap}
      $breakLine={breakLine}
      title={tooltip}
      id={id}
      {...rest}
    >
      {children}
    </StyledText>
  );
});

export default Text;
