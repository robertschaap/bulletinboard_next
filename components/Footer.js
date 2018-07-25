import React from "react";
import styled from "styled-components";

import ContentWrapper from "./ContentWrapper";

const Footer = styled.footer`
  background-color: #003399;
  color: #fff;
  padding: 2rem 0rem;
`;

export default () => (
  <Footer>
    <ContentWrapper>
      <p>Robert Schaap 2018</p>
    </ContentWrapper>
  </Footer>
);
