import React from "react";
import styled from "styled-components";

import ContentWrapper from "./ContentWrapper";

const FooterBody = styled.footer`
  background-color: #003399;
  color: #fff;
  padding: 2rem 0rem;
`;

const Footer = () => (
  <FooterBody>
    <ContentWrapper>
      <p>Robert Schaap 2018</p>
    </ContentWrapper>
  </FooterBody>
);

export default Footer;
