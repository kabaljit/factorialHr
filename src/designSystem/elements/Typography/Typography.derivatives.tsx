import React, { forwardRef } from 'react';
import { Except } from 'type-fest';
import Text from './Typography';
import { TextProps } from './Typography.models';

const H1 = forwardRef<HTMLHeadingElement, Except<TextProps, 'variant'>>((props, ref) => (
  <Text ref={ref} variant="h1" {...props}>
    {props?.children}
  </Text>
));

const H2 = forwardRef<HTMLHeadingElement, Except<TextProps, 'variant'>>((props, ref) => (
  <Text ref={ref} variant="h2" {...props}>
    {props?.children}
  </Text>
));

const H3 = forwardRef<HTMLHeadingElement, Except<TextProps, 'variant'>>((props, ref) => (
  <Text ref={ref} variant="h3" {...props}>
    {props?.children}
  </Text>
));

const P = forwardRef<HTMLHeadingElement, Except<TextProps, 'variant'>>((props, ref) => (
  <Text ref={ref} variant="p" {...props}>
    {props?.children}
  </Text>
));

const Span = forwardRef<HTMLHeadingElement, Except<TextProps, 'variant'>>((props, ref) => (
  <Text ref={ref} variant="span" {...props}>
    {props?.children}
  </Text>
));

export { H1, H2, H3, P, Span };
