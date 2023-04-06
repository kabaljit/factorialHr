import React, { FC, ReactElement } from "react";
import { render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components";

import { Except } from "type-fest";

const AllTheProviders: FC = ({ children }) => (
  <ThemeProvider theme={{ currentTheme: "factorial-light" }}>
    {children}
  </ThemeProvider>
);

const customRender = (ui: ReactElement, options?: Except<any, "queries">) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react-native";

export { customRender as render };
