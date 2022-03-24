import React, { useState } from "react";
import Button from "../elements/Button";
import BrandIcon from "./IconText";

export default function Header(props) {
  const [showMenu, setShowMenu] = useState(false);

  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? "active" : ""; // ambil location dari props,jika isinya sama dengan path yg diminta maka tambah kelas active
  };

  if (props.isCentered) {
    return (
      <header
        className="spacing-sm"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Button className="brand-text-icon mx-auto" href="" type="link">
              Stay<span className="text-gray-900">cation.</span>
            </Button>
          </nav>
        </div>
      </header>
    );
  }

  const showNavbar = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header
      className="spacing-sm"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <div className="container">
        <div className="navbar">
          <BrandIcon />
          <button className="button-toggle" onClick={showNavbar}>
            {showMenu ? (
              <img src="/images/close.png" alt="close" width="20" />
            ) : (
              <img src="/images/menu.png" alt="menu" width="30" />
            )}
          </button>
          {/* Menu navbar desktop */}
          <div className="list-menu-dekstop">
            <Button
              className={`nav-link ${getNavLinkClass("/")}`}
              type="link"
              href="/"
            >
              Home
            </Button>
            <Button
              className={`nav-link ${getNavLinkClass("/browse-by")}`}
              type="link"
              href="/browse-by"
            >
              Browse By
            </Button>
            <Button
              className={`nav-link ${getNavLinkClass("/stories")}`}
              type="link"
              href="/stories"
            >
              Stories
            </Button>
            <Button
              className={`nav-link ${getNavLinkClass("/agents")}`}
              type="link"
              href="/agents"
            >
              Agents
            </Button>
          </div>
          {/* Menu navbar mobile */}
          <div className={`list-menu-phone ${showMenu ? "d-flex" : "d-none"}`}>
            <Button
              className={`nav-link ${getNavLinkClass("/")}`}
              type="link"
              href="/"
            >
              Home
            </Button>
            <Button
              className={`nav-link ${getNavLinkClass("/browse-by")}`}
              type="link"
              href="/browse-by"
            >
              Browse By
            </Button>
            <Button
              className={`nav-link ${getNavLinkClass("/stories")}`}
              type="link"
              href="/stories"
            >
              Stories
            </Button>
            <Button
              className={`nav-link ${getNavLinkClass("/agents")}`}
              type="link"
              href="/agents"
            >
              Agents
            </Button>
          </div>
        </div>
        {/* <nav className="navbar navbar-expand-lg navbar-light">
          <BrandIcon />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={showNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item ${getNavLinkClass("/")}`}>
                <Button className="nav-link" type="link" href="/">
                  Home
                </Button>
              </li>
              <li className={`nav-item ${getNavLinkClass("/browse-by")}`}>
                <Button className="nav-link" type="link" href="/browse-by">
                  Browse By
                </Button>
              </li>
              <li className={`nav-item ${getNavLinkClass("/stories")}`}>
                <Button className="nav-link" type="link" href="/stories">
                  Stories
                </Button>
              </li>
              <li className={`nav-item ${getNavLinkClass("/agents")}`}>
                <Button className="nav-link" type="link" href="/agents">
                  Agents
                </Button>
              </li>
            </ul>
          </div>
        </nav> */}
      </div>
    </header>
  );
}
