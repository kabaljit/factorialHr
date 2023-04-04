import * as React from "react";

import useUid from "@lib/hooks/useUid";

import { Label, OptionControlContainer } from "./OptionControl.styles";
import { OptionControlProps } from "./OptionControl.models";

function OptionControl({ title, onPress, name }: OptionControlProps) {
  const uid = useUid("button", `option-control-${name}`);

  return (
    <OptionControlContainer data-testid={uid} onPress={onPress}>
      <Label>{title}</Label>
    </OptionControlContainer>
  );
}

export default OptionControl;
