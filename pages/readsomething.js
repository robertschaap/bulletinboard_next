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

  loadComments = async (_, changeSort) => {
    let offset = changeSort ? 0 : this.state.offset + 4;
    let sortDirection = changeSort ? changeSort : this.state.sortDirection;

    const res = await fetch(`/api/readsomething?offset=${offset}&sort=${sortDirection}`);
    const json = await res.json();

    this.setState({
      comments: changeSort
        ? [...json]
        : [...this.state.comments, ...json],
      sortDirection: sortDirection,
      offset: offset
    });
  }

  sortComments = (event) => {
    let { value } = event.target;
    let { sortDirection } = this.state;

    if (value !== sortDirection) {
      this.loadComments(value);
    }
  }

  render() {
    const { comments, sortDirection } = this.state;

    return (
      <Layout>
        <section>
          <Heading2>Read Something</Heading2>
          <Select value={sortDirection} onChange={this.sortComments}>
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
