import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export const AgencyNav = () => {
  const [navData, setNavData] = useState({
    active: false,
  });

  const { active } = navData;

  const handleToggle = () => {
    setNavData({ ...navData, active: !active });
  };
  return (
    <section className="navbar-section">
      <div className="nav-container">
        <div className="agency-navbar-content">
          <Link to="/home" className="logo">
            <img
              src="/img/navbar/header-logo.png"
              alt=""
              width="158"
              height="38.81"
            />
          </Link>

          <div
            onClick={handleToggle}
            className={active ? "is-active menu-toggle" : "menu-toggle"}
            id="mobile-menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          <ul className={active ? "active nav-menu" : "nav-menu"}>
            <li>
              <NavLink to="/home" className="nav-link" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="nav-link"
                activeClassName="active"
              >
                FAQ
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/faq"
                className="nav-link"
                activeClassName="active"
              ></NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="nav-link secondary"
                activeClassName="active"
              >
                Sign in
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/agency/register"
                className="nav-link  navlink-btn"
                activeClassName="active"
              >
                Get started
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
