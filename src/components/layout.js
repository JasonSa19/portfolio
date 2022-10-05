// Import required assets and packages
import { React } from "react";

// Init Components
const Layout = ({ pageTitle, children }) => {
  return (
    <html lang="de">
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </html>
  );
};

// Export Component
export default Layout;
