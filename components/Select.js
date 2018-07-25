import React from "react";
import styled from "styled-components";

const Select = styled.select`
  font-family: 'Avenir Next', 'Arial', sans-serif;
  display: block;
  border: none;
  border-radius: 5px;
  margin: 1rem auto;
  width: 25%;
  text-align: center;
`;

export default ({ children }) => (
  <Select>
    {children}
  </Select>
);
