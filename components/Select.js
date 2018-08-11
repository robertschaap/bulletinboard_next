import React from "react";
import styled from "styled-components";

const Select = styled.select`
  font-family: 'Avenir Next', 'Arial', sans-serif;
  display: block;
  border: none;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  width: 100%;
  text-align: center;
`;

export default ({ value, onChange, children }) => (
  <Select value={value} onChange={onChange}>
    {children}
  </Select>
);
