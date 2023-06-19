import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./shared/styles/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SideBar from "./shared/SideBar";
import Sobre from "./pages/Sobre";
import Eventos from "./pages/Eventos";
import Footer from "./shared/Footer";
import Container from "./shared/Container";
import { useEffect } from "react";
import { getAllNoticias } from "./data/services/noticias";
import Noticias from "./pages/Noticias";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <SideBar />
        <Routes>
          <Route element={<Container />}>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/noticias/:manchete" element={<Noticias />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
