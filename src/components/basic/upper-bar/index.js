import Logo from "../../../images/logo2.png";

import "./upper-bar.scss";

const UpperBar = () => {
  return (
    <div className="header__upper-bar">
      <div className="logo">
        <img src={Logo} alt="Logo" className="logo-image" />
      </div>
      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__list--item">
            <a href="#" className="menu__list--item-link">
              Home
            </a>
          </li>
          <li className="menu__list--item">
            <a href="#" className="menu__list--item-link">
              About us
            </a>
          </li>
          <li className="menu__list--item">
            <a href="#" className="menu__list--item-link">
              Our services
            </a>
          </li>
          <li className="menu__list--item">
            <a href="#" className="menu__list--item-link">
              Gallery
            </a>
          </li>
          <li className="menu__list--item">
            <a href="#" className="menu__list--item-link">
              Contacts
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default UpperBar;
