import { forwardRef, useMemo } from "react";

import { replaceTokens } from "@lib/theme/ReplaceTokens";
import { View } from "react-native";
import { BoxContainer } from "./Box.styles";
import { BoxPropsExtended } from "./Box.models";

const Box = forwardRef<View, BoxPropsExtended>((props, ref) => {
  const {
    children,
    margin,
    padding,
    marginBottom,
    marginTop,
    marginLeft,
    marginRight,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    width,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    height,
    flexDirection,
    flexWrap,
    justifyContent,
    alignContent,
    alignItems,
    alignSelf,
    position,
    top,
    right,
    left,
    bottom,
    flex,
    name = "basic",
    ...rest
  } = props;

  const parsedProps = useMemo(() => {
    const properiesToParse = {
      margin,
      padding,
      marginBottom,
      marginTop,
      marginLeft,
      marginRight,
      paddingBottom,
      paddingLeft,
      paddingRight,
      paddingTop,
      width,
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
      height,
      flexDirection,
      flexWrap,
      justifyContent,
      alignContent,
      alignItems,
      alignSelf,
      position,
      top,
      right,
      left,
      bottom,
      flex,
    };

    return replaceTokens(properiesToParse);
  }, [
    margin,
    padding,
    marginBottom,
    marginTop,
    marginLeft,
    marginRight,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    width,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    height,
    flexDirection,
    flexWrap,
    justifyContent,
    alignContent,
    alignItems,
    alignSelf,
    position,
    top,
    right,
    left,
    bottom,
    flex,
  ]);

  return (
    <BoxContainer
      ref={ref}
      $parsedCss={parsedProps}
      testID={`${name}-box`}
      {...rest}
    >
      {children}
    </BoxContainer>
  );
});

export default Box;
