import React, { useState } from "react";
import Styles from "../Components/Navbar.module.css";
import Courses from "../Components/Courses";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={Styles.Nav}>
      <a className={Styles.title} href="">
        REFINER'S INTERNATIONAL MISSIONS (RIM)
      </a>

      <div className={Styles.menu} onClick={() => setMenuOpen(!menuOpen)}>
        <div className={Styles.Hum}></div>

        <ul className={`${Styles.menuItems} ${menuOpen && Styles.menuOpen}`}>
          <li>
            <a href="">HOME</a>
          </li>
          <li>
            <a href="">LEADERS</a>
          </li>
          <li>
            <a href={<Courses />}>GALLERY</a>
          </li>
          <li>
            <a href="">ABOUT US</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
