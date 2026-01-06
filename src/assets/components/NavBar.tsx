import { Link } from "react-router-dom";
import "./NavBar.css";
import { navPages } from "../config/pageMap";

function NavBar() {
  return (
    <nav id="navBar">
      {navPages.map((p) => (
        <Link className="link" key={p.path} to={p.path}>
          {p.label}
        </Link>
      ))}
    </nav>
  );
}

export default NavBar;
