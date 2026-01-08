import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";

import { pages } from "../config/pageMap";

function AppLayout() {
  const location = useLocation();

  const currentPage = pages.find((p) => p.path === location.pathname);
  const subText = currentPage?.label || "";

  return (
    <>
      <Header mainText="React Exploration, Page: " subText={subText} />
      <NavBar />
      <Routes>
        {pages.map((p) => (
          <Route key={p.path} path={p.path} element={<p.component />} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default AppLayout;
