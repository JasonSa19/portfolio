import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import gitSvg from "../images/icon/github.svg";
import mailSvg from "../images/icon/email-button.svg";
import instaSvg from "../images/icon/instagram.svg";
import linkedinSvg from "../images/icon/linkedin-logo.svg";

const Herosection = () => {
  const iconSvg = [
    {
      item: 1,
      slug: "github",
      href: "github.com/jasonsa19",
      source: gitSvg,
    },
    {
      item: 2,
      slug: "linkedin",
      href: "linkedin.com/in/JasonSauerwald",
      source: linkedinSvg,
    },
    {
      item: 3,
      slug: "mail",
      href: "jason01sauerwald@gmail.com",
      source: mailSvg,
    },
    {
      item: 4,
      slug: "instagram",
      href: "instagram.com/jason_sa_",
      source: instaSvg,
    },
  ];
  const startImg = "../images/start.png";
  return (
    <section className="hero">
      <div className="main-headline-wrap">
        <h1>
          Webdesigner & <strong>Front-End</strong> Entwickler<strong>.</strong>
        </h1>
        <div className="icon-wrap">
          {iconSvg.map((ic) => (
            <a key={ic.slug} href={ic.href}>
              <img src={ic.source} alt={ic.slug}></img>
            </a>
          ))}
        </div>
      </div>
      <StaticImage className="start-image" src={startImg} alt="Start" />
    </section>
  );
};

export default Herosection;
