import * as React from "react";

const Footer = () => {
  const footerMenu = [{ item: 1, navTitle: "Impressum", slag: "imprint" }];

  return (
    <footer>
      <div className="footer-menu"></div>
      <ul>
        <li>
          {footerMenu.map((item) => (
            <a key={item.slag} href={`#${item.slag}`}>
              {item.navTitle}
            </a>
          ))}
        </li>
      </ul>
      <span>Erstellt {new Date().getFullYear()}</span>
    </footer>
  );
};

export default Footer;
