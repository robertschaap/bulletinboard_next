import React, { Component } from "react";
import "isomorphic-unfetch";

import Layout from "../components/Layout";
import Heading2 from "../components/Heading2";
import Comment from "../components/Comment";
import Button from "../components/Button";
import Select from "../components/Select";

class ReadSomething extends Component {
  static async getInitialProps() {
    const res = await fetch("http://localhost:3000/readsomething");
    const json = await res.json();

    return {
      comments: json
    };
  }

  state = {
    comments: this.props.comments,
    sortDirection: "desc",
    offset: 0,
  }

  render() {
    const { comments } = this.state;

    return (
      <Layout>
        <section>
          <Heading2>Read Something</Heading2>
          <Select>
            <option value="desc">Newest First</option>
            <option value="asc">Oldest First</option>
          </Select>
          {comments && comments.map((comment, id) => (
            <Comment {...comment} key={id} />
          ))}
        </section>
        <section>
          <Button>Load More Comments</Button>
        </section>
      </Layout>
    );
  }
}

export default ReadSomething;
