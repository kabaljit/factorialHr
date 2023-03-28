import * as React from "react";
import { ButtonProps } from "../Button/Button.models";

import { StyledButton } from "./SecondaryButton.styles";

function SecondaryButton(props: ButtonProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <StyledButton {...props} />;
}

export default SecondaryButton;
