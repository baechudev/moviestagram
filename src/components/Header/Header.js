import './Header.css';
import { useState, useEffect } from 'react';

const Header = () => {
  const [classActive, setClassActive] = useState(false);
  const [toggleMenuClass, setToggleMenuClass] = useState('navbar-menu');
  const [toggleiconClass, setToggleiconClass] = useState('navbar-icon');

  const menuToggleFunction = () => {
    classActive ? setClassActive(false) : setClassActive(true);
  };

  const ToggleButton = () => {
    classActive
      ? setToggleMenuClass('navbar-left-side-menu unfolded')
      : setToggleMenuClass('navbar-left-side-menu');

    classActive
      ? setToggleiconClass('navbar-right-side-icon unfolded')
      : setToggleiconClass('navbar-right-side-icon');
  };

  useEffect(() => {
    ToggleButton();
  });

  return (
    <div className="navbar-background">
      <div className="navbar">
        <div className="navbar-left-side">
          <div className="navbar-left-side-logo">
            <i className="fas fa-photo-video"></i>
            <a href="/">Moviestagram</a>
          </div>
          <ul className={toggleMenuClass}>
            <li>
              <a href="/popular">Popular</a>
            </li>
            <li>
              <a href="/top-rated">Top Rated</a>
            </li>
            <li>
              <a href="/upcoming">Upcoming</a>
            </li>
          </ul>
        </div>

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
    </div>
  );
};

export default Header;
