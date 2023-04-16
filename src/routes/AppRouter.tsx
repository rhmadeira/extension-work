import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import WebSite from "../shared/Layout/WebSite";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route element={<WebSite />}>
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
}
