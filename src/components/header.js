import * as React from "react";
import { Link } from "gatsby";

const Header = () => {
  const NavItems = [
    { item: "Start", slug: "start" },
    { item: "Über mich", slug: "about" },
    { item: "Kenntnisse", slug: "knowledge" },
    { item: "Kontakt", slug: "kontakt" },
  ];
  return (
    <header>
      <div class="header-wrap">
        <Link to="/" className="logo-wrap"></Link>
        <nav>
          <ul>
            {NavItems.map((el) => (
              <li>
                <a key={el.slug} className="nav-link" href={`#${el.slug}`}>
                  {el.item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
