import * as React from "react";
import { Link } from "gatsby";

import Logo from "../images/Logo.svg";

const Header = ({ pageDest, pageDestSnd }) => {
  return (
    <header>
      <div className="logo-wrap">
        <img src={Logo} alt="logo" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to={pageDest}>Start</Link>
          </li>
          <li>
            <Link to={pageDestSnd}>Über mich</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
