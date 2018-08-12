import React from "react";
import styled from "styled-components";

import ContentWrapper from "./ContentWrapper";

const FormBody = styled.form`
  background-color: #e6e6ff;
  padding: 1rem;
  border-radius: 5px;
`;

const Form = ({ onSubmit, children }) => (
  <ContentWrapper>
    <FormBody onSubmit={onSubmit}>
      {children}
    </FormBody>
  </ContentWrapper>
);

export default Form;
