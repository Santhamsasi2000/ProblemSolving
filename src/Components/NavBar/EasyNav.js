import { NavLink } from "react-router-dom";
import "./EasyNav.css";

const navbarTitle = "Problem Solving Consultancy";
const closeNavbar = () => {
  const navbar = document.querySelector(".navbar-collapse");
  if (navbar.classList.contains("show")) {
    navbar.classList.remove("show");
  }
};

const EasyNav = () => {
  return (
    <nav className="navbar navbar-expand-lg px-3 px-sm-4">
      <div className="container-fluid">
        <NavLink className="navbar-brand title" to="/">
          {navbarTitle}
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav d-flex gap-lg-4">
            {/* Home */}
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/" onClick={closeNavbar}>
                Home
              </NavLink>
            </li>
              <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/services" onClick={closeNavbar}>
                Services
              </NavLink>
              </li>

            {/* About */}
            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                About
              </span>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className={({ isActive }) => "dropdown-item" + (isActive ? " active" : "")} to="/aboutus" onClick={closeNavbar}>
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink className={({ isActive }) => "dropdown-item" + (isActive ? " active" : "")} to="/careers" onClick={closeNavbar}>
                    Join Us
                  </NavLink>
                </li>
                <li>
                  <NavLink className={({ isActive }) => "dropdown-item" + (isActive ? " active" : "")} to="/teams" onClick={closeNavbar}>
                    Our Team
                  </NavLink>
                </li>
              </ul>
            </li>
             {/*Case Studies*/}
             <li className="nav-item">
              <NavLink className="nav-link" to="/case-studies" onClick={closeNavbar}>
                Case Studies
              </NavLink>
            </li>
            {/* FAQ*/}
            <li className="nav-item">
              <NavLink className="nav-link" to="/faq" onClick={closeNavbar}>
                FAQ
              </NavLink>
            </li>
            {/* Contact */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" onClick={closeNavbar}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default EasyNav;
