// Import required assets and packages
import * as React from "react";
import { Link } from "gatsby";

import Header from "./Header";

// Init Components

const Layout = ({ pageTitle, children }) => {
  return (
    <section>
      <Header />
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </section>
  );
};

export default Layout;
