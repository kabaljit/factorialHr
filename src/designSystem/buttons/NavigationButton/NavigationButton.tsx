import React, { FunctionComponent } from "react";

import useUid from "@lib/hooks/useUid";
import { P } from "@designSystem/elements/Typography";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import {
  BackContainer,
  StyledNavigationButton,
} from "./NavigationButton.styles";
import { NavigationButtonProps } from "./NavigationButton.models";
import Ionicons from "@expo/vector-icons/Ionicons";

function NavigationButton(props: NavigationButtonProps) {
  const { name, inline, ...rest } = props;
  const uid = useUid("navigation-button", name);
  const { top: safeAreaInsetsTop } = useSafeAreaInsets();

  return (
    <StyledNavigationButton
      testID={uid}
      $inline={inline}
      $safeAreaInsetsTop={safeAreaInsetsTop}
      {...rest}
    >
      <BackContainer>
        <Ionicons testID={`${uid}-chevron-left`} size={24} color="black" />
      </BackContainer>
    </StyledNavigationButton>
  );
}

export default NavigationButton;
