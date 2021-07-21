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
        <i className="fas fa-photo-video"></i>
        <a href="/">Moviestagram</a>
      </div>

      <ul className={toggleMenuClass}>
        <li>
          <a href="/news">News</a>
        </li>
        <li>
          <a href="/hots">Hots</a>
        </li>
        <li>
          <a href="/recs">Recommendations</a>
        </li>
      </ul>

      <ul className={toggleiconClass}>
        <li>
          <a href="https://www.instagram.com/">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
      </ul>

      <a href="#" className="navbar-toggle" onClick={menuToggleFunction}>
        <i className="fas fa-bars"></i>
      </a>
    </div>
  );
}

export default Header;
