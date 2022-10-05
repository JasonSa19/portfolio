// Import react for jsx syntax
import * as React from "react";

// Import main-style
import "../styles/main.sass";

// Import header and footer Component
import pageHeader from "../components/pageHeader";
import pageFooter from "../components/pageFooter";

// Init first Component
const IndexPage = (pageFooter, pageHeader) => {
  return (
    <>
      <body>
        <pageHeader />
        <main>
          <div className="main-wrap">
            <h1>Portfolio</h1>
            <h2>Personal Portfolio Test-seite</h2>
          </div>
        </main>
        <pageFooter />
      </body>
    </>
  );
};

// Export Title to Head
export const Head = () => <title>Jason S. | Front-End Developer</title>;

// export first Component
export default IndexPage;
