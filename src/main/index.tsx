import { Navigation } from "./navigation";
import { ThemeProvider } from "styled-components/native";
import { ThemeName } from "@theme/theme";

function Main() {
  return (
    <ThemeProvider
      theme={{ currentTheme: "factorial-light" as ThemeName }}
      key="styled-theme-provider"
    >
      <Navigation />
    </ThemeProvider>
  );
}

export default Main;
