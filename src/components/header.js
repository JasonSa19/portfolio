import * as React from "react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Start</Link>
            <Link to="/about">Über mich</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
