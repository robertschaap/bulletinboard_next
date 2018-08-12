import React from "react";
import styled from "styled-components";

import ContentWrapper from "./ContentWrapper";

const MainBody = styled.main`
  background-color: #33cc8f;
  padding: 2rem 0rem;
`;

const Main = ({ children }) => (
  <MainBody>
    <ContentWrapper>
      {children}
    </ContentWrapper>
  </MainBody>
);

export default Main;
