import React, { forwardRef, useCallback, useMemo } from "react";

import useUid from "@lib/hooks/useUid";
import Box from "@designSystem/layout/Box";
// Import Spinner from '@designSystem/elements/Spinner';
import { tokens } from "@theme/tokens";
import { ActivityIndicator } from "react-native-paper";
import { ButtonProps } from "./Button.models";
import { ButtonContainer, StyledButton, ButtonText } from "./Button.styles";

/**
 * A primary button element.
 *
 * Children must adhere to the guidelines here: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      name,
      children,
      busy = false,
      disabled = false,
      variant = "contained",
      size = "default",
      title,
      onPress,
      Icon,
      fullWidth,
      fullHeight = false,
      textSize = "body",
      roundedCorners = "true",
      ...rest
    } = props;

    const uid = useUid("button", name);

    const handleClick = useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        onPress?.(event);
      },
      [onPress]
    );

    const buttonContent = useMemo(() => {
      if (busy) {
        return <ActivityIndicator color={tokens.palette.grey[3]} />;
      }

      const defaultButtonContent = children ?? (
        <Box flexDirection="row" justifyContent="center" alignItems="center">
          {Icon && (
            <Box marginRight={8}>
              <Icon />
            </Box>
          )}
          <ButtonText $variant={variant} $textSize={textSize}>
            {title}
          </ButtonText>
        </Box>
      );
      switch (variant) {
        case "icon":
          if (Icon) {
            return <Icon />;
          }

          break;
        case "pill":
          if (Icon) {
            return (
              <Box display="flex" alignItems="center">
                <Icon />
                <ButtonText $variant={variant} $textSize={textSize}>
                  {title}
                </ButtonText>
              </Box>
            );
          }

          break;
        default:
          return defaultButtonContent;
      }
    }, [busy, variant, children, Icon, textSize, title]);

    return (
      <ButtonContainer
        testID={`${uid}-container`}
        $variant={variant}
        $fullWidth={fullWidth}
        $fullHeight={fullHeight}
      >
        <StyledButton
          ref={ref}
          name={name}
          title={title}
          variant={variant}
          disabled={disabled || busy}
          testID={uid}
          onPress={handleClick}
          size={size}
          fullWidth={fullWidth}
          fullHeight={fullHeight}
          busy={busy}
          textSize={textSize}
          roundedCorners={roundedCorners}
          {...rest}
        >
          {buttonContent}
        </StyledButton>
      </ButtonContainer>
    );
  }
);
