import { ThemeProvider } from "styled-components";
import { Transection } from "./pages/Transections";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Transection />
      <GlobalStyle />
    </ThemeProvider>
  );
}
