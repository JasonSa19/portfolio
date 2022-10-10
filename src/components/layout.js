// Import required assets and packages
import * as React from "react";
import Herosection from "./Sections/Herosection";

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
