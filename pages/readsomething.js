import React, { Component } from "react";
import "isomorphic-unfetch";

import Layout from "../components/Layout";
import Heading2 from "../components/Heading2";
import Comment from "../components/Comment";
import Button from "../components/Button";
import Select from "../components/Select";

class ReadSomething extends Component {
  static async getInitialProps() {
    const res = await fetch("http://localhost:3000/api/readsomething");
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

  loadComments = async () => {
    let offset = this.state.offset + 4;
    let sortDirection = "desc";

    const res = await fetch(`/api/readsomething?offset=${offset}&sort=${sortDirection}`);
    const json = await res.json();

    this.setState({
      comments: [
        ...this.state.comments,
        ...json
      ],
      offset: offset
    });
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
          <Button onClick={this.loadComments}>Load More Comments</Button>
        </section>
      </Layout>
    );
  }
}

export default ReadSomething;
