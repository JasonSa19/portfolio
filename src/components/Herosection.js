import React from "react";
import startImg from "/src/images/start.png";

const Herosection = () => {
  return (
    <section className="hero">
      <h1>
        Webdesigner & <strong>Front-End</strong> Entwickler<strong>.</strong>
      </h1>
      <img src={startImg} alt="Startgrafik" />
    </section>
  );
};

export default Herosection;
