import Router from "./Router";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";

function App() {
<<<<<<< HEAD
  return <Router />;

=======

  return(
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  )
  ;
>>>>>>> master
}
export default App;
