import React from "react";
import styled from "styled-components";

const Textarea = styled.textarea`
  font-family: 'Avenir Next', 'Arial', sans-serif;
  display: block;
  border: none;

  width: 100%;
  border-radius: 5px;
  margin-bottom: 0.5rem;

  height: 150px;
  resize: none;
`;

export default (props) => (
  <Textarea {...props} />
);
