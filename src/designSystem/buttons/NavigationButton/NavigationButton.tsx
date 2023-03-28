import React, { FunctionComponent } from 'react';

import useUid from '@lib/hooks/useUid';
import { P } from '@designSystem/elements/Typography';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ArrowLeft from '@assets/svg/ArrowLeft.svg';
import { BackContainer, StyledNavigationButton } from './NavigationButton.styles';
import { NavigationButtonProps } from './NavigationButton.models';

function NavigationButton(props: NavigationButtonProps) {
  const { name, inline, ...rest } = props;
  const uid = useUid('navigation-button', name);
  const { top: safeAreaInsetsTop } = useSafeAreaInsets();

  return (
    <StyledNavigationButton data-testid={uid} $inline={inline} $safeAreaInsetsTop={safeAreaInsetsTop} {...rest}>
      <BackContainer>
        <ArrowLeft />
      </BackContainer>
    </StyledNavigationButton>
  );
}

export default NavigationButton;
