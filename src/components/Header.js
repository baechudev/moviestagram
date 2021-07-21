import "./Header.css";
import { useState, useEffect } from "react";

function Header() {
  const [classActive, setClassActive] = useState(false);
  const [toggleMenuClass, setToggleMenuClass] = useState("navbar-menu");
  const [toggleiconClass, setToggleiconClass] = useState("navbar-icon");

  const menuToggleFunction = () => {
    classActive ? setClassActive(false) : setClassActive(true);
  };

  const ToggleButton = () => {
    classActive
      ? setToggleMenuClass("navbar-menu unfolded")
      : setToggleMenuClass("navbar-menu");

    classActive
      ? setToggleiconClass("navbar-icon unfolded")
      : setToggleiconClass("navbar-icon");
  };

  useEffect(() => {
    ToggleButton();
  });

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <i class="fas fa-photo-video"></i>
        <a href="#">Moviestagram</a>
      </div>

      <ul className={toggleMenuClass}>
        <li>
          <a href="#">News</a>
        </li>
        <li>
          <a href="#">Hots</a>
        </li>
        <li>
          <a href="#">Recommendations</a>
        </li>
      </ul>

      <ul className={toggleiconClass}>
        <li>
          <a href="#">
            <i class="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fab fa-twitter"></i>
          </a>
        </li>
      </ul>

      <a href="#" className="navbar-toggle" onClick={menuToggleFunction}>
        <i class="fas fa-bars"></i>
      </a>
    </div>
  );
}

export default Header;
