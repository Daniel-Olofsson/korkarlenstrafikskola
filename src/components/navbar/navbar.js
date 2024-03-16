import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/logo.png";
import StrLogo from "../images/strmedlem.jpg";
import { AppBar, Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useMediaQuery, useTheme } from "@mui/material";
import PhoneNav from "./phoneNav";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <AppBar
      position="static"
      className={`custom-appbar navigationbar__container ${
        isMobile && isNavOpen ? "mobile-open" : ""
      }`}
    >
      <Toolbar>
        {/* Hamburger Menu for Mobile */}
        {isMobile && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleNav}
            className="navigationbar__container__toggler"
          >
            {isNavOpen ? (
              <CloseIcon
                className="navigationbar__container__toggler-icon"
                style={{ width: "20px", height: "20px", color: "black" }}
              />
            ) : (
              <MenuIcon
                className="navigationbar__container__toggler-icon"
                style={{ width: "20px", height: "20px", color: "black" }}
              />
            )}
          </IconButton>
        )}
        {/* Logo */}
        <div className="navigationbar__container__brand">
          <NavLink
            to="/"
            className="navigationbar__container__brand-link"
            style={{ marginRight: "20px" }}
          >
            <img
              src={Logo}
              alt="logo"
              className="navigationbar__container__brand-logo"
              style={{ width: "150px", height: "80px" }}
            />
            <img
              src={StrLogo}
              alt="str-logo"
              className="navigationbar__container__brand-image"
              style={{ width: "60px", height: "40px" }}
            />
          </NavLink>
        </div>

        {isMobile && isNavOpen && <PhoneNav toggleNav={toggleNav} />}

        {/* Navigation Links */}
        {!isMobile && (
          <div
            className="navigationbar__container__collapse"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <ul className="navigationbar__container__nav">
              <li className="navigationbar__container__nav-item">
                <NavLink
                  to="/"
                  exact="true"
                  className={`navigationbar__container__nav-link ${
                    isMobile ? "" : "navigationbar__container__active"
                  }`}
                >
                  Home
                </NavLink>
              </li>
              <li className="navigationbar__container__nav-item">
                <NavLink
                  to="/about"
                  exact="true"
                  className={`navigationbar__container__nav-link ${
                    isMobile ? "" : "navigationbar__container__active"
                  }`}
                >
                  Om Oss
                </NavLink>
              </li>
              <li className="navigationbar__container__nav-item">
                <NavLink
                  to="/price"
                  exact="true"
                  className={`navigationbar__container__nav-link ${
                    isMobile ? "" : "navigationbar__container__active"
                  }`}
                >
                  Priser
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
