import React from "react";
import styled from "styled-components";

import Heading3 from "./Heading3";
import Heading4 from "./Heading4";

const Comment = styled.div`
  margin-bottom: 1rem;
  background-color: rgba(230,255,245,0.5);

  &:after {
    content: '';
    display: table;
    clear: both;
  }
`;

const CommentBody = styled.div`
  width: calc(100% - 120px);
  float: right;
  padding: 1rem;
  border-radius: 5px;
`;

const CommentInfo = styled.div`
  width: 120px;
  height: 120px;
  float: left;
  padding: 1rem;
`;

const CommentImage = styled.img`
  border-radius: 50%;
`;

export default ({ avatar, body, name, title }) => {
  if (!avatar || !body || !name || !title) {
    return null;
  }

  return (
    <Comment>
      <CommentInfo>
        <CommentImage src={`/static/images/${avatar}.png`} alt={avatar} width="100%" />
      </CommentInfo>
      <CommentBody>
        <Heading3>{title}</Heading3>
        <Heading4>{name}</Heading4>
        <p>{body}</p>
      </CommentBody>
    </Comment>
  );
};
