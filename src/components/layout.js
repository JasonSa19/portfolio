// Import required assets and packages
import * as React from "react";
import { Link } from "gatsby";

// Init Components

const Layout = ({ pageTitle, children }) => {
  return (
    <section>
      <nav>
        <ul>
          <li>
            <Link to="/">Start</Link>
          </li>
          <li>
            <Link to="/about">Über mich</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </section>
  );
};

export default Layout;
