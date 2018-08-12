import React from "react";
import styled from "styled-components";
import Link from "next/link";

import ContentWrapper from "./ContentWrapper";

const NavbarBody = styled.header`
  color: #fff;
  background: linear-gradient(to bottom, #336600 0%, #003399 100%);
  padding: 2rem 0rem;
  margin-bottom: 1rem;
  position: relative;
`;

const Heading1 = styled.h1`
  margin: 0;
  font-weight: 200;
  font-size: 3.5rem;
`;

const Navlink = styled.a`
  background-color: #ff9999;
  border-bottom: 2px solid #ff9999;
  padding: 0rem 0.5rem;
  text-decoration: none;
  color: #fff;

  &:hover {
    border-bottom: 2px solid #fff;
  }
`;

const Navbar =  () => (
  <NavbarBody>
    <ContentWrapper>
      <Heading1>Bulletin Board</Heading1>
      <nav>
        <Link href="/writesomething">
          <Navlink>Write</Navlink>
        </Link>
        <Link href="/readsomething">
          <Navlink>Read</Navlink>
        </Link>
      </nav>
    </ContentWrapper>
  </NavbarBody>
);

export default Navbar;
