import React from "react";
import styled from "styled-components";

import ContentWrapper from "./ContentWrapper";

const Form = styled.form`
  background-color: #e6e6ff;
  padding: 1rem;
  border-radius: 5px;
`;

export default ({ children }) => (
  <ContentWrapper>
    <Form>
      {children}
    </Form>
  </ContentWrapper>
);
