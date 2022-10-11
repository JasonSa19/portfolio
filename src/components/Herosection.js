import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Herosection = () => {
  const gitSvg = "/src/images/icon/github.svg";
  const instagramSvg = "/src/images/icon/github.svg";
  const mailSvg = "/src/images/icon/github.svg";
  const linkedinSvg = "/src/images/icon/github.svg";

  const iconSvg = [
    {
      item: 1,
      slug: "github",
      href: "github.com/jasonsa19",
      source: { gitSvg },
    },
    {
      item: 2,
      slug: "linkedin",
      href: "linkedin.com/in/JasonSauerwald",
      source: { linkedinSvg },
    },
    {
      item: 3,
      slug: "mail",
      href: "jason01sauerwald@gmail.com",
      source: { mailSvg },
    },
    {
      item: 4,
      slug: "instagram",
      href: "instagram.com/jason_sa_",
      source: { instagramSvg },
    },
  ];
  const startImg = "../images/start.png";
  return (
    <section className="hero">
      <div className="main-headline-wrap">
        <h1>
          Webdesigner & <strong>Front-End</strong> Entwickler<strong>.</strong>
        </h1>
        {iconSvg.map((ic) => (
          <a key={ic.slug} href={ic.href}>
            <img src={ic.source}></img>
          </a>
        ))}
      </div>
      <StaticImage className="start-image" src={startImg} alt="Start" />
    </section>
  );
};

export default Herosection;
