// Import required assets and packages
import * as React from "react";

// Init Components

const Layout = ({ pageTitle, children }) => {
  return (
    <main>
      <h1>{pageTitle}</h1>
      {children}
    </main>
  );
};

export default Layout;
