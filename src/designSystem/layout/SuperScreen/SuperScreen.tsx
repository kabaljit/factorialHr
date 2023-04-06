import React, { useMemo } from "react";
import Box from "@designSystem/layout/Box";
import { tokens } from "@theme/tokens";
import { StatusBar, TouchableWithoutFeedback, Keyboard } from "react-native";
import {
  ContainerNoPadding,
  KeyboardAvoidingView,
  SafeArea,
  ScrollableContent,
  SuperScreenContainer,
} from "./SuperScreen.styles";
import { SuperScreenProps } from "./SuperScreen.models";

function SuperScreen(props: SuperScreenProps) {
  const {
    children,
    background = "white",
    statusBarBackground = "white",
    // eslint-disable-next-line react/destructuring-assignment
    statusBarColor = props.fullscreen ? "dark-content" : "dark-content",
    keyboardAvoiding = true,
    hasPadding = true,
    justifyContent = "flex-start",
    flex = 1,
    containContentScrollable = false,
    scrollable = false,

    keyboardVerticalOffset = 0,
    fullscreen,
  } = props;

  const Wrapper = useMemo(
    () => (fullscreen ? ContainerNoPadding : SafeArea),
    [fullscreen]
  );

  const containedChildren = useMemo(
    () => (
      <Box
        paddingLeft={hasPadding ? 20 : 0}
        paddingRight={hasPadding ? 20 : 0}
        paddingTop={hasPadding ? 8 : 0}
        paddingBottom={hasPadding ? 8 : 0}
        justifyContent={justifyContent}
        flex={1}
      >
        {children}
      </Box>
    ),
    [children, hasPadding, justifyContent]
  );

  const content = useMemo(() => {
    if (scrollable) {
      return <ScrollableContent>{containedChildren}</ScrollableContent>;
    }
    if (containContentScrollable) {
      return containedChildren;
    }

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        {containedChildren}
      </TouchableWithoutFeedback>
    );
  }, [containContentScrollable, containedChildren, scrollable]);

  return (
    <SuperScreenContainer
      testID="super-screen"
      background={background}
      flex={flex}
    >
      <Wrapper>
        <>
          <StatusBar
            backgroundColor={
              fullscreen
                ? "transparent"
                : tokens.palette[statusBarBackground][0]
            }
            barStyle={statusBarColor}
          />
          {keyboardAvoiding ? (
            <KeyboardAvoidingView
              keyboardVerticalOffset={keyboardVerticalOffset}
            >
              {content}
            </KeyboardAvoidingView>
          ) : (
            content
          )}
        </>
      </Wrapper>
    </SuperScreenContainer>
  );
}

export default SuperScreen;
