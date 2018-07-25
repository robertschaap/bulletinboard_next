import React from "react";
import styled from "styled-components";

import ContentWrapper from "./ContentWrapper";

const Main = styled.main`
  background-color: #33cc8f;
  padding: 2rem 0rem;
`;

export default ({ children }) => (
  <Main>
    <ContentWrapper>
      {children}
    </ContentWrapper>
  </Main>
);
