import { useLocation } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import Aside from "./Aside";
import Content from "./Content";

import { pages } from "../config/pageMap";

import "./AppLayout.css";

function AppLayout() {
  const location = useLocation();

  const currentPage = pages.find((p) => p.path === location.pathname);
  const subText = currentPage?.label || "";

  return (
    <>
      <Header mainText="React Exploration, Page: " subText={subText} />
      <NavBar />
      <div id="main">
        <Aside />
        <Content id="container" />
      </div>
    </>
  );
}

export default AppLayout;
