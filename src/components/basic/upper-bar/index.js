import Logo from "../../../images/logo2.png";

import { Link } from "react-router-dom";

import "./upper-bar.scss";

const UpperBar = () => {
  return (
    <div className="header__upper-bar">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Logo" className="logo-image" />
        </Link>
      </div>
      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__list--item">
            <Link to="/" className="menu__list--item-link">
              Home
            </Link>
          </li>
          <li className="menu__list--item">
            <Link to="/about" className="menu__list--item-link">
              About us
            </Link>
          </li>
          <li className="menu__list--item">
            <Link to="/services" className="menu__list--item-link">
              Our services
            </Link>
          </li>
          <li className="menu__list--item">
            <Link to="/gallery" className="menu__list--item-link">
              Gallery
            </Link>
          </li>
          <li className="menu__list--item">
            <Link to="/contacts" className="menu__list--item-link">
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default UpperBar;
