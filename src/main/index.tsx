import { Navigation } from "./navigation";
import { ThemeProvider } from "styled-components/native";
import { ThemeName } from "@theme/theme";
import { QueryClientProvider, QueryClient } from "react-query";

function Main() {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider
      theme={{ currentTheme: "factorial-light" as ThemeName }}
      key="styled-theme-provider"
    >
      <QueryClientProvider client={queryClient}>
        <Navigation />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default Main;
