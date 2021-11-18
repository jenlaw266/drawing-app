import logo from "./draw-logo.png";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <Link to="/draw" class="navbar-item" id="nav-logo">
          <img src={logo} alt="draw logo" />
        </Link>
      </div>
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <Link to="/" class="navbar-item">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
