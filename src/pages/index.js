// Import required assets and packages
import * as React from "react";
import "../styles/main.sass";

// Init Components
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

// export Component
export default IndexPage;
