// Import react for jsx syntax
import * as React from "react";

// Import main-style
import "../styles/main.sass";

// Import header and footer Componen

// Init first Component
const IndexPage = () => {
  return (
    <body>
      <main>
        <div className="main-wrap">
          <h1>Portfolio</h1>
          <h2>Personal Portfolio Test-seite</h2>
        </div>
      </main>
    </body>
  );
};

// Export Title to Head
export const Head = () => <title>Jason S. | Front-End Developer</title>;

// export first Component
export default IndexPage;
