import Link from "next/link";
import React from "react";
import LogoWhite from "./Icons/LogoWhite";
import LinkItem from "./LinkItem";

const Header = () => {
  return (
    <header>
      <Link href="/">
        <LogoWhite />
      </Link>

      <ul>
        <LinkItem title="Services" link="/services" />
        <LinkItem title="Industries" link="/services" />
        <LinkItem title="Case Studies" link="/services" />
        <LinkItem title="About" link="/services" />
      </ul>
    </header>
  );
};

export default Header;
