// Import react for jsx syntax
import * as React from "react";

// Import main-style
import "./style/main.sass";

// Import header Component
import header from "./components/header.js";

// init header Component
header = () => {};
// Init first Component
const IndexPage = () => {
  return (
    <main>
      <div className="main-wrap">
        <h1>Portfolio</h1>
        <h2>Personal Portfolio Test-seite</h2>
      </div>
    </main>
  );
};

// Export Title to Head
export const Head = () => <title>Jason S. | Front-End Developer</title>;

// export first Component
export default IndexPage;
