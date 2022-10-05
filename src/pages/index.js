// Import required assets and packages
import * as React from "react";
import "../styles/main.sass";

import Layout from "../components/layout";

// Init Components
const IndexPage = () => {
  return (
    <Layout pageTitle={"Portfolio-Seite"}>
      <p>Das ist meine Portfolio-Seite in the Making</p>
    </Layout>
  );
};

// Export Title to Head
export const Head = () => <title>Jason S. | Front-End Developer</title>;

// export Component
export default IndexPage;
