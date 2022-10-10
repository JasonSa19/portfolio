// Import required assets and packages
import * as React from "react";
import Herosection from "./Herosection";

// Init Components

const Layout = ({ pageTitle, children }) => {
  return (
    <main>
      <Herosection />

      {children}
    </main>
  );
};

export default Layout;
