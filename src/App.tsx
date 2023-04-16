import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./shared/styles/theme";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
