import React from "react";
import styled from "styled-components";

const SelectBody = styled.select`
  font-family: 'Avenir Next', 'Arial', sans-serif;
  display: block;
  border: none;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  width: 100%;
  text-align: center;
`;

const Select =  ({ children, ...props }) => (
  <SelectBody {...props}>
    {children}
  </SelectBody>
);

export default Select;
