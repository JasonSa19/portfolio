// Import required assets and packages
import * as React from "react";
import "../styles/main.sass";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

// Init Components
const IndexPage = () => {
  return (
    <>
      <Header />
      <Layout pageTitle={"Portfolio-Seite"}>
        <p>Das ist meine Portfolio-Seite in the Making</p>
      </Layout>
      <Footer />
    </>
  );
};

// Export Title to Head
export const Head = () => <title>Jason S. | Front-End Developer</title>;

// export Component
export default IndexPage;
