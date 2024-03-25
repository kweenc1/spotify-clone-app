

import React, { useState } from "react";
import "./LandingPageHeader.css";
import { Logo } from "../Logo/Logo";
import MenuIcon from "../../assets/icons/Menu.svg";
import { HeaderNavigation } from "./HeaderNavigation";

export const LandingPageHeader = () => {
  // Correctly destructure the useState hook array
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    // Toggle the state value
    setShowMenu(!showMenu);
  };

  return (
    <header className="header">
      <div className="logo">
        <Logo useWhite={true} />
      </div>
      <div className="menu" onClick={toggleMenu}>
        {/* Render the MenuIcon directly */}
        <img className='menuicon' src={MenuIcon} alt="menu" onClick={toggleMenu} />
        {/* Render HeaderNavigation based on showMenu state */}
        {showMenu && <HeaderNavigation />}
      </div>
    </header>
  );
};
