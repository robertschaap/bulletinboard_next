import React from "react";
import styled from "styled-components";

const Label = styled.label`
  font-family: 'Avenir Next', 'Arial', sans-serif;
  display: block;
  border: none;

  width: 100%;
  border-radius: 5px;
  margin-bottom: 0.5rem;
`;

export default ({ children }) => (
  <Label>{children}</Label>
);
