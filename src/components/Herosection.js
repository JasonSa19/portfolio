import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Herosection = () => {
  const startImg = "../images/start.png";
  return (
    <section className="hero">
      <h1>
        Webdesigner & <strong>Front-End</strong> Entwickler<strong>.</strong>
      </h1>
      <StaticImage className="start-image" src={startImg} alt="Start" />
    </section>
  );
};

export default Herosection;
